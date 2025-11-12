# backend/routes/insights.py
from fastapi import APIRouter
from utils.monitor import sample_metrics
from utils.ai_engine import analyze_metrics_text
import asyncio

router = APIRouter()

@router.get('/generate')
async def generate_insight():
    metrics = sample_metrics()
    text = await analyze_metrics_text(metrics)
    return {"insight": text, "metrics": metrics}
