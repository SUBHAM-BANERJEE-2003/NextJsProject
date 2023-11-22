'use client'
import { useParams } from 'next/navigation';

const ComplaintPage = () => {
  const { id } = useParams();

  return (
    <div>
      Complaint Id: {id}
    </div>
  );
}

export default ComplaintPage;