import axios from 'axios'
export const fetchSnapshot = (base)=> axios.get(`${base}/metrics/snapshot`).then(r=>r.data)
export const fetchInsight = (base)=> axios.get(`${base}/insights/generate`).then(r=>r.data)
