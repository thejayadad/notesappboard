'use client'
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const NewNoteBtn = () => {
    const createNote = useMutation(api.note.createNote); // Use the correct mutation
    const router = useRouter(); // Initialize router for navigation
  
    const onCreate = async () => {
      const promise = createNote({ title: "Untitled" })
        .then((noteId) => {
          toast.success("New Note Created!");
          router.push(`/${noteId}`); // Redirect to note page
        })
        .catch(() => {
          toast.error("Failed to create the note.");
        });
  
      toast.promise(promise, {
        loading: "Creating a note...",
        success: "New Note created!",
        error: "Failed to create the note.",
      });
    };
  
  return (
    <div>
           <button onClick={onCreate} className="flex items-center space-x-1 bg-neutral-500 text-yellow-500 px-4 py-2 rounded-md">
        <span>Create Note</span>
      </button>
    </div>
  )
}

export default NewNoteBtn