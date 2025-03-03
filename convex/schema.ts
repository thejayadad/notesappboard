import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    title: v.string(), // Required title
    editorContent: v.optional(v.string()), // Text content (optional)
    whiteboardData: v.optional(v.string()), // Whiteboard data (optional)
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});
