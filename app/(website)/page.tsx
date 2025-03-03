"use client";

import NewNoteBtn from "@/components/new-note";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useState } from "react";

export default function Home() {

  return (
    <div>
      <NewNoteBtn
      />
    </div>
  );
}
