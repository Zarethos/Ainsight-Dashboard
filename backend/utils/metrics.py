# backend/routes/metrics.py
from fastapi import APIRouter
from utils.monitor import sample_metrics

router = APIRouter()

@router.get('/snapshot')
def snapshot():
    return sample_metrics()

@router.get('/health')
def health():
    return {"status": "ok"}
