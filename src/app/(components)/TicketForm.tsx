"use client"
import { useRouter } from "next/router";
import React, { useState } from "react";

interface TicketFormData {
    title: string;
    description: string;
    priority: number;
    progress: number;
    status: string;
    category: string;
}

const TicketForm: React.FC = () => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    };

    const startTicketData: TicketFormData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Computer Science",
    };

    const [formData, setFormData] = useState<TicketFormData>(startTicketData);
    return (
        <div className="flex justify-center">
            <form>
                <h3>Create your Task here</h3>
                <label>Title</label>
                <input id="title" name="title" type="text" onChange={handleChange} required={true} value={formData.title}/>

            </form>
        </div>
    );
};

export default TicketForm;
