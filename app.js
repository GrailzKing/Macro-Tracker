// Macro Tracker — vanilla JS, localStorage-backed, offline-first PWA
// -----------------------------------------------------------------

const DEFAULT_FOODS = [{"name": "Whey Protein", "cal": 115.0, "protein": 24.0, "carbs": 2.5}, {"name": "ISOPURE Protein", "cal": 110.0, "protein": 25.0, "carbs": 1.5}, {"name": "PF X3 Creatine", "cal": 15.0, "protein": 0.0, "carbs": 3.0}, {"name": "Visalus", "cal": 90.0, "protein": 12.0, "carbs": 7.0}, {"name": "Amino Active", "cal": 18.0, "protein": 0.0, "carbs": 4.5}, {"name": "Electrolyte Mix", "cal": 96.0, "protein": 0.0, "carbs": 24.0}, {"name": "Jimmy Johns #9 Unwhich (No Mayo or Vinagarette)", "cal": 449.0, "protein": 29.0, "carbs": 12.0}, {"name": "Chipotle - Triple CCS Meat Salad Bowl Add Guacamole and Black Beans (No Other Toppings)", "cal": 910.0, "protein": 104.0, "carbs": 34.0}, {"name": "Chipotle - Double CS Meat Salad Bowl Add Guacamole and Black Beans (No Other Toppings)", "cal": 730.0, "protein": 72.0, "carbs": 34.0}, {"name": "Chipotle - Steak Meat Salad Bowl Add Guacamole and Black Beans (No Other Toppings)", "cal": 550.0, "protein": 40.0, "carbs": 34.0}, {"name": "Chipotle - Chicken Meat Salad Bowl Add Guacamole and Black Beans (No Other Toppings)", "cal": 540.0, "protein": 42.0, "carbs": 32.0}, {"name": "Whataburger Double Meat (No Cheese, No Bun)", "cal": 520.0, "protein": 40.8, "carbs": 4.3}, {"name": "Hardboiled Eggs (Large)", "cal": 78.0, "protein": 6.0, "carbs": 0.6}, {"name": "Bacon Slice (Pan Fried)", "cal": 43.0, "protein": 3.0, "carbs": 0.1}, {"name": "Chicken Strips Grilled", "cal": 122.0, "protein": 14.0, "carbs": 0.0}, {"name": "Slice of Brisket", "cal": 72.0, "protein": 5.2, "carbs": 0.0}, {"name": "Banana", "cal": 105.0, "protein": 1.3, "carbs": 27.0}, {"name": "Skirt Steak Salad No Dressing", "cal": 600.0, "protein": 46.0, "carbs": 5.0}, {"name": "Apple", "cal": 96.0, "protein": 0.5, "carbs": 25.0}, {"name": "Scrambled Egg w/Cheese", "cal": 140.0, "protein": 9.2, "carbs": 2.2}, {"name": "Bacon Baked", "cal": 44.0, "protein": 2.9, "carbs": 0.1}, {"name": "Tortilla", "cal": 90.0, "protein": 2.4, "carbs": 15.0}, {"name": "Snow Crab (1 lb) w/ butter (2 Tbsp)", "cal": 722.0, "protein": 65.0, "carbs": 27.0}, {"name": "Broccoli", "cal": 50.0, "protein": 4.2, "carbs": 10.0}, {"name": "Gumbo (Chicken, Sausage, and Rice)", "cal": 400.0, "protein": 15.0, "carbs": 21.0}, {"name": "Smoothie (1/2 Cup Kale, 1/2cup Spinach, 1/2 Banana, 1/2 Pink Lady Apple)", "cal": 217.0, "protein": 4.7, "carbs": 5.4}, {"name": "Gatorade Zero", "cal": 5.0, "protein": 0.0, "carbs": 1.0}, {"name": "Coffee w/Cream", "cal": 30.0, "protein": 0.0, "carbs": 1.0}, {"name": "Hot & Spicy Beef Jerky", "cal": 70.0, "protein": 11.0, "carbs": 6.0}, {"name": "Luna - Lemon Bar", "cal": 90.0, "protein": 4.0, "carbs": 13.0}, {"name": "Smoked Turkey Sandwich", "cal": 510.0, "protein": 27.0, "carbs": 18.0}, {"name": "RedBull - Coconut", "cal": 160.0, "protein": 0.0, "carbs": 40.0}, {"name": "Kitkat-BiteSize", "cal": 52.0, "protein": 0.0, "carbs": 6.0}, {"name": "1/2 lb Dickies Beef Brisket", "cal": 670.0, "protein": 64.0, "carbs": 4.0}, {"name": "6oz Jalapeno Beans Dickies", "cal": 220.0, "protein": 13.0, "carbs": 40.0}, {"name": "Gala Apple", "cal": 62.0, "protein": 0.0, "carbs": 15.0}, {"name": "Rainbow Sherbert Pre Jym", "cal": 80.0, "protein": 0.0, "carbs": 3.0}, {"name": "Pork Steak", "cal": 438.0, "protein": 43.0, "carbs": 0.0}, {"name": "1 Cup Green Beans", "cal": 31.0, "protein": 2.0, "carbs": 7.0}, {"name": "Scrambled Egg", "cal": 91.0, "protein": 6.0, "carbs": 1.0}, {"name": "Slice of Bacon", "cal": 42.0, "protein": 3.0, "carbs": 0.0}, {"name": "Turkey Sausage links", "cal": 100.0, "protein": 12.0, "carbs": 1.0}, {"name": "Mi Cocina - Rico Salad", "cal": 400.0, "protein": 38.0, "carbs": 31.0}, {"name": "Pistachio", "cal": 4.0, "protein": 0.1, "carbs": 0.4}, {"name": "Hamburger Meat 90/10", "cal": 178.0, "protein": 21.0, "carbs": 0.0}, {"name": "Cashews 1oz", "cal": 157.0, "protein": 5.0, "carbs": 9.0}, {"name": "Orgain Choc Shake Protein", "cal": 250.0, "protein": 16.0, "carbs": 12.0}, {"name": "Pork Chop", "cal": 505.0, "protein": 52.0, "carbs": 0.0}, {"name": "White Claw", "cal": 100.0, "protein": 0.0, "carbs": 2.0}, {"name": "Blueberries 50 count", "cal": 39.0, "protein": 0.5, "carbs": 10.0}, {"name": "Revolution - Watermelon Isolate", "cal": 120.0, "protein": 24.0, "carbs": 6.0}, {"name": "Whole Chicken Breast", "cal": 86.0, "protein": 16.0, "carbs": 0.0}, {"name": "Ribeye Steak", "cal": 847.0, "protein": 69.0, "carbs": 0.0}, {"name": "Beef Frank", "cal": 147.0, "protein": 5.0, "carbs": 1.0}, {"name": "10 Red Grapes", "cal": 34.0, "protein": 0.0, "carbs": 9.0}, {"name": "Honey Ham Lunch Meat", "cal": 60.0, "protein": 9.0, "carbs": 2.0}, {"name": "Oreo Cookie", "cal": 55.0, "protein": 0.0, "carbs": 8.0}, {"name": "1/2lb Brisket", "cal": 704.0, "protein": 94.0, "carbs": 0.0}, {"name": "Grilled Chicken Quarter", "cal": 475.0, "protein": 62.0, "carbs": 0.0}];

const DEFAULT_FORMULA = { proteinPerLb: 0.77, calPerLb: 9, carbPctOfProtein: 0.4 };

const LS_KEYS = {
  foods: 'mt_foods_v1',
  weightLog: 'mt_weight_log_v1',
  dayLogs: 'mt_day_logs_v1',
  formula: 'mt_formula_v1',
};

// ---------- storage helpers ----------
function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn('load failed for', key, e);
    return fallback;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('save failed for', key, e);
    alert('Could not save data (storage may be full or unavailable in this browser).');
  }
}

function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

// ---------- state ----------
let foods = load(LS_KEYS.foods, null) || DEFAULT_FOODS.map((f, i) => ({ id: 'seed-' + i, ...f }));
let weightLog = load(LS_KEYS.weightLog, []); // [{date, weight}]
let dayLogs = load(LS_KEYS.dayLogs, {}); // { date: [{entryId, foodId, name, cal, protein, carbs, servings}] }
let formula = load(LS_KEYS.formula, DEFAULT_FORMULA);
let viewDate = todayStr();

function persistFoods() { save(LS_KEYS.foods, foods); }
function persistWeight() { save(LS_KEYS.weightLog, weightLog); }
function persistDayLogs() { save(LS_KEYS.dayLogs, dayLogs); }
function persistFormula() { save(LS_KEYS.formula, formula); }

// ---------- derived data ----------
function latestWeight() {
  if (weightLog.length === 0) return null;
  const sorted = [...weightLog].sort((a, b) => a.date.localeCompare(b.date));
  return sorted[sorted.length - 1].weight;
}

function targetsForWeight(weight) {
  if (weight == null || isNaN(weight)) return null;
  const protein = Math.round(weight * formula.proteinPerLb);
  const cal = Math.round(weight * formula.calPerLb);
  const carbs = Math.round(protein * formula.carbPctOfProtein);
  return { protein, cal, carbs };
}

function entriesForDate(date) {
  return dayLogs[date] || [];
}

function totalsForDate(date) {
  const entries = entriesForDate(date);
  return entries.reduce(
    (acc, e) => {
      acc.cal += e.cal * e.servings;
      acc.protein += e.protein * e.servings;
      acc.carbs += e.carbs * e.servings;
      return acc;
    },
    { cal: 0, protein: 0, carbs: 0 }
  );
}

// ---------- UI: tabs ----------
const tabs = ['today', 'foods', 'history', 'settings'];
function showTab(tab) {
  tabs.forEach((t) => {
    document.getElementById('tab-' + t).classList.toggle('active', t === tab);
    document.getElementById('panel-' + t).classList.toggle('hidden', t !== tab);
  });
  if (tab === 'history') renderHistory();
  if (tab === 'today') renderToday();
  if (tab === 'foods') renderFoods();
}

// ---------- rendering: Today ----------
function fmt(n) {
  return Math.round(n * 10) / 10;
}

function renderTargets() {
  const w = latestWeight();
  const t = targetsForWeight(w);
  const box = document.getElementById('targets-box');
  if (!t) {
    box.innerHTML = '<p class="muted">Log your weight below to see your daily targets.</p>';
    return;
  }
  box.innerHTML = `
    <div class="targets-grid">
      <div class="target-cell"><div class="target-num">${t.cal}</div><div class="target-label">cal target</div></div>
      <div class="target-cell"><div class="target-num">${t.protein}g</div><div class="target-label">protein target</div></div>
      <div class="target-cell"><div class="target-num">${t.carbs}g</div><div class="target-label">carb target</div></div>
    </div>
    <p class="muted small">Based on ${w} lb &middot; ${formula.proteinPerLb} g protein/lb, ${formula.calPerLb} cal/lb, carbs = ${Math.round(formula.carbPctOfProtein * 100)}% of protein. Adjust formula in Settings.</p>
  `;
}

function bar(label, value, target, unit) {
  const pct = target ? Math.min(100, Math.round((value / target) * 100)) : 0;
  const over = target && value > target;
  return `
    <div class="progress-row">
      <div class="progress-label"><span>${label}</span><span>${fmt(value)}${unit} ${target ? '/ ' + target + unit : ''}</span></div>
      <div class="progress-track"><div class="progress-fill ${over ? 'over' : ''}" style="width:${pct}%"></div></div>
    </div>
  `;
}

function renderTodayTotals() {
  const w = latestWeight();
  const t = targetsForWeight(w);
  const totals = totalsForDate(viewDate);
  const box = document.getElementById('today-totals');
  box.innerHTML =
    bar('Calories', totals.cal, t ? t.cal : null, '') +
    bar('Protein', totals.protein, t ? t.protein : null, 'g') +
    bar('Carbs', totals.carbs, t ? t.carbs : null, 'g');
}

function renderTodayLog() {
  const entries = entriesForDate(viewDate);
  const list = document.getElementById('today-log-list');
  if (entries.length === 0) {
    list.innerHTML = '<p class="muted">No food logged for this day yet.</p>';
    return;
  }
  list.innerHTML = entries
    .map(
      (e) => `
    <div class="log-entry">
      <div class="log-entry-main">
        <div class="log-entry-name">${escapeHtml(e.name)}</div>
        <div class="log-entry-sub">${e.servings} &times; (${e.cal} cal, ${e.protein}g P, ${e.carbs}g C) = ${fmt(e.cal * e.servings)} cal</div>
      </div>
      <button class="icon-btn danger" data-remove-entry="${e.entryId}" aria-label="Remove">&times;</button>
    </div>`
    )
    .join('');
}

function renderDateHeader() {
  document.getElementById('view-date-label').textContent = viewDate === todayStr() ? 'Today' : 'Viewing';
  document.getElementById('view-date-input').value = viewDate;
}

function renderToday() {
  renderDateHeader();
  renderTargets();
  renderTodayTotals();
  renderTodayLog();
  renderFoodPicker();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ---------- food picker (search + add) ----------
function renderFoodPicker() {
  const q = (document.getElementById('food-search').value || '').toLowerCase().trim();
  const results = foods.filter((f) => f.name.toLowerCase().includes(q)).slice(0, 40);
  const list = document.getElementById('food-picker-list');
  if (results.length === 0) {
    list.innerHTML = '<p class="muted">No foods match. Try a different search, or add it in the Foods tab.</p>';
    return;
  }
  list.innerHTML = results
    .map(
      (f) => `
    <div class="picker-row">
      <div class="picker-main">
        <div class="picker-name">${escapeHtml(f.name)}</div>
        <div class="picker-sub">${f.cal} cal &middot; ${f.protein}g P &middot; ${f.carbs}g C per serving</div>
      </div>
      <div class="picker-controls">
        <input type="number" class="servings-input" id="serv-${f.id}" value="1" min="0" step="0.5" inputmode="decimal">
        <button class="btn small" data-add-food="${f.id}">Add</button>
      </div>
    </div>`
    )
    .join('');
}

function addFoodToLog(foodId) {
  const food = foods.find((f) => f.id === foodId);
  if (!food) return;
  const input = document.getElementById('serv-' + foodId);
  const servings = parseFloat(input.value);
  if (!servings || servings <= 0) {
    alert('Enter a serving amount greater than 0.');
    return;
  }
  const entry = {
    entryId: 'e-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
    foodId: food.id,
    name: food.name,
    cal: food.cal,
    protein: food.protein,
    carbs: food.carbs,
    servings,
  };
  if (!dayLogs[viewDate]) dayLogs[viewDate] = [];
  dayLogs[viewDate].push(entry);
  persistDayLogs();
  renderTodayTotals();
  renderTodayLog();
  input.value = 1;
}

function removeEntry(entryId) {
  const entries = dayLogs[viewDate] || [];
  dayLogs[viewDate] = entries.filter((e) => e.entryId !== entryId);
  persistDayLogs();
  renderTodayTotals();
  renderTodayLog();
}

// ---------- weight logging ----------
function logWeight() {
  const input = document.getElementById('weight-input');
  const w = parseFloat(input.value);
  if (!w || w <= 0) {
    alert('Enter a valid weight.');
    return;
  }
  const date = document.getElementById('weight-date-input').value || todayStr();
  const idx = weightLog.findIndex((e) => e.date === date);
  if (idx >= 0) weightLog[idx].weight = w;
  else weightLog.push({ date, weight: w });
  persistWeight();
  input.value = '';
  renderTargets();
  renderTodayTotals();
  renderHistory();
}

// ---------- Foods tab (manage database) ----------
function renderFoods() {
  const q = (document.getElementById('foods-manage-search').value || '').toLowerCase().trim();
  const list = document.getElementById('foods-manage-list');
  const filtered = foods.filter((f) => f.name.toLowerCase().includes(q));
  if (filtered.length === 0) {
    list.innerHTML = '<p class="muted">No foods found.</p>';
    return;
  }
  list.innerHTML = filtered
    .map(
      (f) => `
    <div class="picker-row">
      <div class="picker-main">
        <div class="picker-name">${escapeHtml(f.name)}</div>
        <div class="picker-sub">${f.cal} cal &middot; ${f.protein}g P &middot; ${f.carbs}g C per serving</div>
      </div>
      <div class="picker-controls">
        <button class="icon-btn" data-edit-food="${f.id}" aria-label="Edit">&#9998;</button>
        <button class="icon-btn danger" data-delete-food="${f.id}" aria-label="Delete">&times;</button>
      </div>
    </div>`
    )
    .join('');
}

function openFoodForm(existing) {
  const modal = document.getElementById('food-form-modal');
  modal.classList.remove('hidden');
  document.getElementById('food-form-title').textContent = existing ? 'Edit food' : 'Add food';
  document.getElementById('food-form-id').value = existing ? existing.id : '';
  document.getElementById('food-form-name').value = existing ? existing.name : '';
  document.getElementById('food-form-cal').value = existing ? existing.cal : '';
  document.getElementById('food-form-protein').value = existing ? existing.protein : '';
  document.getElementById('food-form-carbs').value = existing ? existing.carbs : '';
}
function closeFoodForm() {
  document.getElementById('food-form-modal').classList.add('hidden');
}
function saveFoodForm(e) {
  e.preventDefault();
  const id = document.getElementById('food-form-id').value;
  const name = document.getElementById('food-form-name').value.trim();
  const cal = parseFloat(document.getElementById('food-form-cal').value) || 0;
  const protein = parseFloat(document.getElementById('food-form-protein').value) || 0;
  const carbs = parseFloat(document.getElementById('food-form-carbs').value) || 0;
  if (!name) {
    alert('Food name is required.');
    return;
  }
  if (id) {
    const f = foods.find((x) => x.id === id);
    if (f) Object.assign(f, { name, cal, protein, carbs });
  } else {
    foods.push({ id: 'f-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7), name, cal, protein, carbs });
  }
  persistFoods();
  closeFoodForm();
  renderFoods();
  renderFoodPicker();
}
function deleteFood(id) {
  if (!confirm('Delete this food from your database? (Past log entries already recorded are unaffected.)')) return;
  foods = foods.filter((f) => f.id !== id);
  persistFoods();
  renderFoods();
  renderFoodPicker();
}

// ---------- History tab ----------
function renderHistory() {
  renderWeightChart();
  const dates = Object.keys(dayLogs)
    .filter((d) => (dayLogs[d] || []).length > 0)
    .sort()
    .reverse();
  const list = document.getElementById('history-days-list');
  if (dates.length === 0) {
    list.innerHTML = '<p class="muted">No logged days yet.</p>';
    return;
  }
  list.innerHTML = dates
    .map((d) => {
      const t = totalsForDate(d);
      return `<div class="picker-row" data-jump-date="${d}" style="cursor:pointer">
        <div class="picker-main">
          <div class="picker-name">${d}</div>
          <div class="picker-sub">${Math.round(t.cal)} cal &middot; ${Math.round(t.protein)}g P &middot; ${Math.round(t.carbs)}g C</div>
        </div>
        <span class="chevron">&rsaquo;</span>
      </div>`;
    })
    .join('');
}

function renderWeightChart() {
  const box = document.getElementById('weight-chart');
  const sorted = [...weightLog].sort((a, b) => a.date.localeCompare(b.date));
  if (sorted.length === 0) {
    box.innerHTML = '<p class="muted">No weight entries yet.</p>';
    return;
  }
  const W = 320,
    H = 140,
    pad = 24;
  const weights = sorted.map((e) => e.weight);
  const min = Math.min(...weights),
    max = Math.max(...weights);
  const range = max - min || 1;
  const stepX = sorted.length > 1 ? (W - pad * 2) / (sorted.length - 1) : 0;
  const points = sorted.map((e, i) => {
    const x = pad + i * stepX;
    const y = H - pad - ((e.weight - min) / range) * (H - pad * 2);
    return [x, y];
  });
  const path = points.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  const dots = points.map((p) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3" class="chart-dot"/>`).join('');
  box.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" class="chart-svg">
      <path d="${path}" class="chart-line" fill="none"/>
      ${dots}
    </svg>
    <div class="chart-range"><span>${min} lb</span><span>${sorted[0].date} &rarr; ${sorted[sorted.length - 1].date}</span><span>${max} lb</span></div>
  `;
}

// ---------- Settings tab ----------
function renderSettings() {
  document.getElementById('formula-protein').value = formula.proteinPerLb;
  document.getElementById('formula-cal').value = formula.calPerLb;
  document.getElementById('formula-carb').value = formula.carbPctOfProtein;
}
function saveFormula(e) {
  e.preventDefault();
  formula = {
    proteinPerLb: parseFloat(document.getElementById('formula-protein').value) || DEFAULT_FORMULA.proteinPerLb,
    calPerLb: parseFloat(document.getElementById('formula-cal').value) || DEFAULT_FORMULA.calPerLb,
    carbPctOfProtein: parseFloat(document.getElementById('formula-carb').value) || DEFAULT_FORMULA.carbPctOfProtein,
  };
  persistFormula();
  renderTargets();
  renderTodayTotals();
  alert('Formula saved.');
}

function exportData() {
  const data = { foods, weightLog, dayLogs, formula, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'macro-tracker-backup-' + todayStr() + '.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!confirm('This will replace all current data on this device with the imported backup. Continue?')) return;
      foods = data.foods || foods;
      weightLog = data.weightLog || weightLog;
      dayLogs = data.dayLogs || dayLogs;
      formula = data.formula || formula;
      persistFoods();
      persistWeight();
      persistDayLogs();
      persistFormula();
      renderToday();
      renderFoods();
      renderHistory();
      renderSettings();
      alert('Import complete.');
    } catch (e) {
      alert('Could not read that file as a valid backup.');
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (!confirm('This permanently deletes all logged weight, food history, and custom foods on this device. This cannot be undone. Continue?')) return;
  localStorage.removeItem(LS_KEYS.foods);
  localStorage.removeItem(LS_KEYS.weightLog);
  localStorage.removeItem(LS_KEYS.dayLogs);
  localStorage.removeItem(LS_KEYS.formula);
  foods = DEFAULT_FOODS.map((f, i) => ({ id: 'seed-' + i, ...f }));
  weightLog = [];
  dayLogs = {};
  formula = { ...DEFAULT_FORMULA };
  renderToday();
  renderFoods();
  renderHistory();
  renderSettings();
}

// ---------- event wiring ----------
document.addEventListener('DOMContentLoaded', () => {
  tabs.forEach((t) => document.getElementById('tab-' + t).addEventListener('click', () => showTab(t)));

  document.getElementById('weight-date-input').value = todayStr();
  document.getElementById('log-weight-btn').addEventListener('click', logWeight);

  document.getElementById('food-search').addEventListener('input', renderFoodPicker);
  document.getElementById('food-picker-list').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-food]');
    if (btn) addFoodToLog(btn.getAttribute('data-add-food'));
  });
  document.getElementById('today-log-list').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove-entry]');
    if (btn) removeEntry(btn.getAttribute('data-remove-entry'));
  });

  document.getElementById('view-date-input').addEventListener('change', (e) => {
    viewDate = e.target.value || todayStr();
    renderToday();
  });
  document.getElementById('jump-today-btn').addEventListener('click', () => {
    viewDate = todayStr();
    renderToday();
  });

  document.getElementById('foods-manage-search').addEventListener('input', renderFoods);
  document.getElementById('add-food-btn').addEventListener('click', () => openFoodForm(null));
  document.getElementById('foods-manage-list').addEventListener('click', (e) => {
    const editBtn = e.target.closest('[data-edit-food]');
    const delBtn = e.target.closest('[data-delete-food]');
    if (editBtn) openFoodForm(foods.find((f) => f.id === editBtn.getAttribute('data-edit-food')));
    if (delBtn) deleteFood(delBtn.getAttribute('data-delete-food'));
  });
  document.getElementById('food-form').addEventListener('submit', saveFoodForm);
  document.getElementById('food-form-cancel').addEventListener('click', closeFoodForm);

  document.getElementById('history-days-list').addEventListener('click', (e) => {
    const row = e.target.closest('[data-jump-date]');
    if (row) {
      viewDate = row.getAttribute('data-jump-date');
      showTab('today');
    }
  });

  document.getElementById('formula-form').addEventListener('submit', saveFormula);
  document.getElementById('export-btn').addEventListener('click', exportData);
  document.getElementById('import-input').addEventListener('change', (e) => {
    if (e.target.files[0]) importData(e.target.files[0]);
    e.target.value = '';
  });
  document.getElementById('reset-btn').addEventListener('click', resetAllData);

  renderSettings();
  showTab('today');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
