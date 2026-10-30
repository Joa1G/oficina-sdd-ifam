import { CONFIG } from './config.js';

export function loadRecord() {
  try {
    const value = Number(localStorage.getItem(CONFIG.recordStorageKey));
    return Number.isFinite(value) ? value : 0;
  } catch (error) {
    return 0;
  }
}

export function saveRecord(value) {
  try {
    localStorage.setItem(CONFIG.recordStorageKey, String(value));
  } catch (error) {
    // Ignora erro de armazenamento local em navegadores restritivos.
  }
}

export function updateRecordIfNeeded(score) {
  const currentRecord = loadRecord();
  if (score > currentRecord) {
    saveRecord(score);
    return score;
  }
  return currentRecord;
}
