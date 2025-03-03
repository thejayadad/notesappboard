import {v} from "convex/values"
import {mutation, query} from "./_generated/server"
import {Doc, Id} from "./_generated/dataModel"

export const createNote = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const { db } = ctx; // Extract `db` explicitly
    
        // Insert group with timestamp
        const noteId = await db.insert("notes", {
          title: args.title,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });
    
        return noteId; // Return the newly created book ID
      },
})

export const getNoteById = query({
    args: { id: v.id("notes") }, // Require a valid group ID
    handler: async (ctx, { id }) => {
      const note = await ctx.db.get(id); // Fetch book by ID
      if (!note) {
        throw new Error("Note not found");
      }
      return note;
    },
})

export const getNotes = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query("notes").collect();
    },
  });


  
export const updateNote = mutation({
    args: { id: v.id("notes"), title: v.string() },
    handler: async (ctx, { id, title }) => {
      await ctx.db.patch(id, { title });
    },
  });
  
  export const deleteNote = mutation({
    args: { id: v.id("notes") },
    handler: async (ctx, { id }) => {
      await ctx.db.delete(id);
    },
  });