'use client'
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import React from 'react'

const SingleNotePage = () => {
    const params = useParams();
  const noteId = params?.id as string;

  if (!noteId) {
    return <div className="text-center text-red-500 mt-10">Invalid Book ID</div>;
  }

  const documentId: Id<"notes"> = noteId as Id<"notes">;
  const note = useQuery(api.note.getNoteById, { id: documentId });

  // Handle loading state
  if (note === undefined) {
    return <div className="text-center text-gray-500 mt-10">Loading Note...</div>;
  }

  // Handle note not found case
  if (!note) {
    return <div className="text-center text-red-500 mt-10">Note not found.</div>;
  }
  return (
    <div>SingleNotePage
        {note.title}
    </div>
  )
}

export default SingleNotePage