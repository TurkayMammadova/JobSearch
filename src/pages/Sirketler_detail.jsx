import React from 'react';
import { useParams } from 'react-router-dom';
import Companies from '../components/Companies/Companies';
import CompanyDetail from '../components/Company_detail/Company_detail';

function Sirketler_detail() {
  const { id } = useParams();

  return (
    <div className="container">
      <Companies />
      {/* <CompanyDetail /> */}
    </div>
  );
}

export default Sirketler_detail;
