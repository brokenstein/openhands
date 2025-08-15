"use client";
import { useState } from "react";
import { Box, Button, TextField, Typography, Paper, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface LinkItem {
  title: string;
  url: string;
}

export default function LinksPage() {
  const [links, setLinks] = useState<LinkItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("links");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addLink = () => {
    if (!title || !url) return;
    const newLinks = [...links, { title, url }];
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
    setTitle("");
    setUrl("");
  };

  const deleteLink = (idx: number) => {
    const newLinks = links.filter((_, i) => i !== idx);
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Paper elevation={3} sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" mb={2}>Saved Links & Docs</Typography>
        <Box display="flex" gap={1} mb={2}>
          <TextField
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            size="small"
          />
          <TextField
            label="URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
            size="small"
          />
          <Button variant="contained" onClick={addLink}>Add</Button>
        </Box>
        <List>
          {links.map((link, idx) => (
            <ListItem
              key={idx}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteLink(idx)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={<a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>}
                secondary={link.url}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
