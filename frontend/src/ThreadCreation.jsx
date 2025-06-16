import { IconButton, Icon, TextField } from "actify";
import { useState } from "react";

function ThreadCreation() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newThread = {
            threadName: title,
            threadContent: message,
            // Can't log in yet so this will have to do :(
            threadUser: { id: 1 }, 
            threadCreationTime: new Date().toISOString(),
            threadUpdateTime: null,
        };

        try {
            const response = await fetch("http://localhost:8080/api/thread/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newThread),
            });

            if (response.ok) {
                console.log("Thread created successfully!");
                setTitle("");
                setMessage("");
            } else {
                console.error("Failed to create thread:", response.status);
            }
        } catch (error) {
            console.error("Error creating thread:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="text-xl self-center">Create a new Thread</div>
            </div>
            <TextField
                label="Title"
                type="text"
                style={{ height: '25px' }}
                value={title}
                onChange={(value) => setTitle(value)}
            />
            <TextField
                variant="outlined"
                label="Message"
                type="textarea"
                value={message}
                onChange={(value) => setMessage(value)}
            />
            <div className="flex justify-end">
                <IconButton type="submit">
                    <Icon>send</Icon>
                </IconButton>
            </div>
        </form>
    );
}

export default ThreadCreation;