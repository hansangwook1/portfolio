import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "kopo-portfolio-recent-projects";
const MAX_RECENT = 5;

function load() {
    if (typeof window === "undefined") return [];
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch { return []; }
}
function save(items) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}