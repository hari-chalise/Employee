import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

constructor() { }

getList(): Observable<any> {
  return of (EMPLOYEE);
}

getListById(id: number): Observable<any> {
  const data = EMPLOYEE.find(x => x.id === id);
  return of (data);
}

addOrUpdate(body: any): Observable<any> {
  if (body.id > 0) {
    const data = EMPLOYEE.findIndex(x => x.id === body.id);
    const d = EMPLOYEE.find(x => x.id === body.id);
    EMPLOYEE[data] = body;
    body.sn = d.sn;
    body.id = d.id;
    return of (body);
  } else {
    EMPLOYEE.push(body);
    body.id = EMPLOYEE.length + 1;
    body.sn = EMPLOYEE.length + 1;
    return of (body);
  }
}

delete(id: number): Observable<any> {
  const index = EMPLOYEE.findIndex(x => x.id === id);
  EMPLOYEE.splice(index, 1);
  return of (EMPLOYEE);
}

}

const EMPLOYEE = [
  {
    id: 1,
    sn: 1,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 2,
    sn: 2,
    name: 'KUlendra',
    email: 'kulendra@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 3,
    sn: 3,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:

      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Female',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 4,
    sn: 4,
    name: 'Diamond',
    email: 'diamond@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }

    ,
    gender: 'Female',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 5,
    sn: 5,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
    //  [
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      },
    // ],
    gender: 'Female',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 6,
    sn: 6,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 7,
    sn: 7,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Female',
    company: 'Aqore',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 8,
    sn: 8,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Aqore',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 9,
    sn: 9,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'VIew9',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 10,
    sn: 10,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 11,
    sn: 11,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 12,
    sn: 12,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  },
  {
    id: 13,
    sn: 13,
    name: 'Ramchandra',
    email: 'ram@gmail.com',
    pNumber: '9867895623',
    address:
      {
        province: 'Gandaki',
        district: 'Baglung',
        manucipality: 'Dhorpatan'
      }
    ,
    gender: 'Male',
    company: 'Ezinesoft',
    designation: 'Software Engineer',
    blodGroup: 'O+ve',
    maritalStatus: 'Single',
    education: 'Bachelor in Computer Application',
    basicSalary: '20000',
  }
];
