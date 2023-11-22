'use client'
import TicketForm from '@/app/(components)/TicketForm';
import { useParams } from 'next/navigation';

const ComplaintPage = () => {
  const { id } = useParams();

  return (
    <TicketForm />
  );
}

export default ComplaintPage;