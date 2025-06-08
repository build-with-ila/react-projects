import { useState, useEffect }  from 'react';
import './styles.css';

interface UserItem {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  }
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: number;
    coordinates: {
      lat: string;
      lng: string;
    }
    country: string;    
  }
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: number;
    cardType: string;
    currency: string;
    iban: string;
  }
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: number;
      coordinates: {
        lat: string;
        lng: string;
      }
      country: string;ein: string;
      ssn: string;
      userAgent: string;
      crypto: {
        coin: string;
        wallet: string;
        network: string;
      }
      role: string;
    }
  }
}
const PaginationApp = () => {
    const [users, setUsers] = useState<UserItem[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
     
    const selectPageHandler = (selectedPage: number)=>{
        if(selectedPage >=1 && selectedPage < Math.ceil(totalPages/10) && selectedPage !== page) {
          setPage(selectedPage);
        }
    }
    /*const fetchProducts = aync() => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=10");
        const data = await res.json();
        if(data && data.products) {
            //setProducts(data.products);
        }
        console.log(data);
      } catch(error) {
        console.error('Error fetching data: ', error);
      }    
    }  

    useEffect(()=>{
          fetchProducts();
    }, []);*/

    useEffect(()=>{
        const url = `https://dummyjson.com/users?limit=10&skip=${page*10 - 10}`;
        console.log(url);
        fetch(url)
        .then((res) => res)
        .then((data)=>data.json())
        .then((d)=>{
          setUsers(d.users as UserItem[]);
          setTotalPages(d.total as number);
        });
    }, [page]);
    //console.log(users);

    return (
      <div>
    {users.length > 0 && (
        <div className="users">      
          <h1>Users</h1>
          {
            //users.slice(page*10 - 10 , page*10).map( (t) => (
            users.map((t) => (
            <span className="users__single" key={t.id}>
              <img src={t.image} alt={t.firstName} />
              <span>{t.firstName} {t.lastName}</span>
            </span>
            ))
          }
        </div>
    )}
    {
      users.length>0 && <div className="pagination">
        <span onClick={()=>selectPageHandler(page-1)} className={page > 1 ? "" : "pagination__disable"}>⬅️</span>
        {
          [...Array(Math.ceil(totalPages/10))].map((_,i)=> { return <span className={ page === i+1? "pagination__selected":""} onClick={()=>selectPageHandler(i+1)} key={i}>{i+1}</span>})
        }
        <span onClick={()=>selectPageHandler(page+1)} className={page < totalPages ? "" : "pagination__disable"}>➡️</span>
      </div>
    }
  </div>
  );
}

export default PaginationApp