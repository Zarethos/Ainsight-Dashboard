import React, { useEffect, useState } from 'react'
import { fetchSnapshot, fetchInsight } from '../api'
import MetricCard from './MetricCard'
import InsightBox from './InsightBox'

export default function Dashboard({apiBase}){
  const [metrics, setMetrics] = useState(null)
  const [insight, setInsight] = useState(null)

  async function load(){
    const s = await fetchSnapshot(apiBase)
    setMetrics(s)
  }
  useEffect(()=>{ load(); const id = setInterval(load, 5000); return ()=>clearInterval(id); },[])

  async function genInsight(){
    const r = await fetchInsight(apiBase)
    setInsight(r.insight)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-3">
          <MetricCard title="CPU" value={metrics?.cpu_percent} />
          <MetricCard title="Memory" value={metrics?.memory?.percent} />
          <MetricCard title="Disk" value={metrics?.disk?.percent} />
          <MetricCard title="Network" value={metrics?.network?.bytes_sent} />
        </div>
        <div className="mt-4">
          <button onClick={genInsight} className="px-4 py-2 rounded bg-indigo-600">Ask AI for insight</button>
          <pre className="mt-2 p-3 bg-gray-800 rounded h-48 overflow-auto">{JSON.stringify(metrics, null, 2)}</pre>
        </div>
      </div>
      <aside>
        <InsightBox insight={insight} />
      </aside>
    </div>
  )
}
