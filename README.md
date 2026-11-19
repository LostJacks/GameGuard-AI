# GameGuard AI

Individual ML Main Challenge: supervised toxicity classification of gaming chat messages.

## Project layout

| Folder | Purpose |
|---|---|
| `data/raw/gametox/` | Original, unchanged GameTox CSV |
| `data/interim/` | Intermediate cleaned or mapped datasets |
| `data/processed/` | Prepared train/validation/test splits |
| `notebooks/` | Documented exploration, modelling and evaluation |
| `src/gameguard/` | Reusable Python functionality once needed |
| `models/` | Trained pipelines and metadata |
| `reports/figures/` | Charts exported from notebooks |
| `reports/results/` | Experiment result tables and metrics |
| `tests/` | Python tests |
| `backend/` | Future FastAPI service |
| `frontend/` | Future React/Vite app |
| `docs/` | Decisions and supporting documentation |

## Planned notebook sequence

1. `01_Data_Understanding.ipynb` — inspect the raw GameTox dataset without modifying it.
2. `02_Data_Preparation.ipynb` — handle labels, problematic rows and leakage-safe data splits.
3. `03_Baseline_Models.ipynb` — train comparable TF-IDF + classifier baselines.
4. `04_Model_Improvements.ipynb` — controlled changes to features and models.
5. `05_Final_Evaluation.ipynb` — one-time testing of the selected model.

Only notebook 01 exists so far; the others will be created as the project progresses.

## Set up in VS Code (Windows PowerShell)

1. Extract the ZIP, then open the **GameGuard-AI** folder in VS Code.
2. Open **Terminal > New Terminal** and run:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade pip
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

3. Install the VS Code **Python** and **Jupyter** extensions if needed.
4. Open `notebooks/01_Data_Understanding.ipynb`, choose the `.venv` Python interpreter as the notebook kernel, and run cells top to bottom.

If using the separate JupyterLab UI:

```powershell
.\.venv\Scripts\python.exe -m jupyter lab
```

## Data notes

- `data/raw/gametox/train.csv` is a copy of the uploaded GameTox training CSV. Do not edit the original.
- Training files should be kept out of Git unless redistribution is confirmed; `.gitignore` excludes them.
- The original dataset has six label codes. Mapping them into Toxic/Not Toxic is **provisional** until annotation definitions are checked.
- Split by appropriate conversation/group identity if available; check duplicates and conflicting labels **before fitting** vectorizers. Fit TF-IDF on training data only.
- Backend and frontend are intentionally placeholders; focus on the ML pipeline first.
