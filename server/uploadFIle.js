import { createClient } from "@supabase/supabase-js";
import fs from "fs";

// Initialize Supabase
const supabaseUrl = "https://wdxmgntwmtjnelhaaxhj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeG1nbnR3bXRqbmVsaGFheGhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDM2NDk1OSwiZXhwIjoyMDU1OTQwOTU5fQ.BjbJR10YaDHa4cpnStavl5nEfQhwbWLeIbVPHx6TGRw";
const supabase = createClient(supabaseUrl, supabaseKey);
const publicbacket = "skillCraft Image";
// Read file from the filesystem // Bucket names should not have spaces!

// Upload file function
export async function uploadFile(fileBuffer, filename) {
  const filePath = `images/${filename}`;

  // Upload file
  const { data, error } = await supabase.storage
    .from(publicbacket)
    .upload(filePath, fileBuffer, {
      contentType: "image/png",
      upsert: true, // If file exists, overwrite
    });

  if (error) {
    console.error("Upload error:", error.message);
    return null;
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from(publicbacket)
    .getPublicUrl(filePath);
  return urlData.publicUrl;
}
