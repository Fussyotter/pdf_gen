'use client'
import React from 'react';
import PdfGenerator from './pdfgenerator/page'
import CallSheetForm from './CallSheetForm/page';

export default function Home() {
  const [formValues, setFormValues] = React.useState({});
 
  const handleFormSubmit = (form) => {
    setFormValues(form);
  };
  return (
    <>
    <CallSheetForm onSubmit={handleFormSubmit}/>
    <PdfGenerator form={formValues}/>
    </> 
  )
}
