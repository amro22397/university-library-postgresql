"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { toast } from "@/hooks/use-toast";
import { borrowBook } from "@/lib/actions/book";
import { toast } from "sonner";


interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}


const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {

    const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

   const handleBorrowBook = async () => {

    if (!isEligible) {

        toast.error(message);
        
    }

    setBorrowing(true)



    try {

        const result = await borrowBook({ bookId, userId });

        if (result.success) {
            toast.success("Book borrowed successfully")
        }

        router.push('/')
        
    } catch (error) {
        
        toast.error(`Client Error while borrowing: ${error}`);


    } finally {

        setBorrowing(false);

    }
    }

    setBorrowing(true);
  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrowBook}
      disabled={borrowing}
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing ..." : "Borrow Book"}
      </p>
    </Button>
  )
}

export default BorrowBook