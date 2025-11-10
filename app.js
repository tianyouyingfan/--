'use strict';

/**
 * 数据集：SpaceX 与 长征五号
 * 每个数据集包含：显示标题、文档标题、火箭图、三轮 A/B/C 阶段内容
 */
const DATASETS = {
  cz5: {
    key: 'cz5',
    displayName: '长征五号',
    headerTitle: '长征五号：实践—认识—再实践的螺旋',
    docTitle: '实践与认识的辩证运动：长征五号 的螺旋上升',
    rocketSrc: '长五.png',
    cycles: [
      {
        title: '阶段一·跟跑',
        year: '2006—2017',
        stages: [
          { id:'A', name:'实践-感性', summary:'立项与十年攻坚',
            detail:'2006立项，前期论证近20年；攻克247项关键新技、90%新研产品，箭体直径跨越至5米，补齐大火箭短板。' },
          { id:'B', name:'理性认识', summary:'遥一首飞成功',
            detail:'2016-11-03 遥一首飞成功，送实践十七入轨，运力跻身世界先进，实现从零到一。' },
          { id:'C', name:'理性到实践的飞跃', summary:'成功中的异常',
            detail:'飞行中二级YF-75D提前关机，依靠远征二号延长燃烧入轨，提示系统复杂性与潜在风险，进入新一轮实践检验。' }
        ]
      },
      {
        title: '阶段二·并跑',
        year: '2017—2019',
        stages: [
          { id:'A', name:'实践-感性', summary:'遥二失利',
            detail:'2017-07-02 遥二在约346秒推力骤降导致失利；获取丰富遥测、试验与仿真数据，沉淀感性材料。' },
          { id:'B', name:'理性认识', summary:'归零溯因',
            detail:'启动“归零双五条”，故障树排查50+项；40余次/15000+秒关键试验与20000+地面试验，指向YF-77设计薄弱引发涡轮泵局部异常。' },
          { id:'C', name:'理性到实践的飞跃', summary:'改进复飞',
            detail:'采取“局部改进”与全国联攻，质量目标“超越最高标准”，洁净度优于要求5倍；2019-12-27 遥三成功复飞，“王者归来”。' }
        ]
      },
      {
        title: '阶段三·领跑',
        year: '2020—至今',
        stages: [
          { id:'A', name:'实践-感性', summary:'重大任务应用',
            detail:'2020 长五B首飞；遥四发射天问一号；遥五发射嫦娥五号；2021起发射天和/问天/梦天，托举空间站建成。' },
          { id:'B', name:'理性认识', summary:'方法论升级',
            detail:'深空与在轨数据沉淀新感性材料，优化轨道控制与系统可靠性，验证认识的相对性与无限性，推动“跟跑→并跑→领跑”。' },
          { id:'C', name:'理性到实践的飞跃', summary:'系列化领跑',
            detail:'形成系列化平台，支撑探月三期、天问三/四号、巡天望远镜与未来载人登月；十余次成功，成功率95%以上。' }
        ]
      }
    ]
  },
  spacex: {
    key: 'spacex',
    displayName: 'SpaceX',
    headerTitle: 'SpaceX：实践—认识—再实践的螺旋',
    docTitle: '实践与认识的辩证运动：SpaceX 的螺旋上升',
    rocketSrc: '火箭.png',
    cycles: [
      {
        title: 'Falcon 1',
        year: '2006—2008',
        stages: [
          {
            id: 'A',
            name: '实践-感性',
            summary: '泄漏、振动、分离失灵',
            detail: '2006泄漏/管腐蚀；2007振动致泵故障；2008分离时机与推力不匹配致碰撞。'
          },
          {
            id: 'B',
            name: '理性认识',
            summary: '振动—燃料矛盾',
            detail: '归纳结构脆弱、燃料系统不稳；确立“振动—燃料流动”为主要矛盾。'
          },
          {
            id: 'C',
            name: '理性到实践的飞跃',
            summary: '密封与分离优化',
            detail: '泄漏→耐蚀材料/密封；振动→减振+推力控制；分离→重设机制+实时监测。'
          }
        ]
      },
      {
        title: 'Falcon 9',
        year: '2010—2015',
        stages: [
          {
            id: 'A',
            name: '实践-感性',
            summary: '海上倾覆与故障',
            detail: '13-14海上倾覆：腿不稳、风干扰；15-01液压耗尽舵失效；15-06支柱断裂致二级解体。'
          },
          {
            id: 'B',
            name: '理性认识',
            summary: '着陆不确定性',
            detail: '将风、液压压力与控制耦合视为主要矛盾；建立仿真以预测着陆动态。'
          },
          {
            id: 'C',
            name: '理性到实践的飞跃',
            summary: '腿稳、冗余与算法',
            detail: '腿→结构优化、增液压储备、自动调节；舵→冗余+算法校正；支柱→材料测试、固定改进、地面模拟。'
          }
        ]
      },
      {
        title: 'Starship',
        year: '2020—至今',
        stages: [
          {
            id: 'A',
            name: '实践-感性',
            summary: '点火不均与热挑战',
            detail: '2023-04点火不均/泄漏致爆；2023-11二级后自毁：热防护失效、氧阀问题；2024-25再入热盾破损、姿控失灵。'
          },
          {
            id: 'B',
            name: '理性认识',
            summary: '高热—结构统一',
            detail: '提炼“再入高热—结构完整”对立统一规律；建立热流与总体动力学模型。'
          },
          {
            id: 'C',
            name: '理性到实践的飞跃',
            summary: '集群与热盾迭代',
            detail: '点火→优化发动机集群/同步点火；热防护→陶瓷瓦+冷却升级；姿控→传感器+算法控制、密集地面/飞行试验。'
          }
        ]
      }
    ]
  }
};

// 当前数据集（默认：长征五号）
let currentDatasetKey = 'cz5';
let CYCLES = DATASETS[currentDatasetKey].cycles;

// DOM refs
const $svg = document.getElementById('spiralSvg');
const $viz = document.getElementById('viz');
const $bubble = document.getElementById('bubble');
const $bubbleStageBadge = document.getElementById('bubbleStageBadge');
const $bubbleStageTitle = document.getElementById('bubbleStageTitle');
const $bubbleSummary = document.getElementById('bubbleSummary');
const $progressDot = document.getElementById('progressDot');
const $rocket = document.getElementById('rocket');
const $nodePopups = document.getElementById('nodePopups');

const $headerTitle = document.getElementById('headerTitle');
const $btnDatasetToggle = document.getElementById('btnDatasetToggle');

const $cycleTitle = document.getElementById('cycleTitle');
const $cycleYear = document.getElementById('cycleYear');
const $cycleDetails = document.getElementById('cycleDetails');
const $detailBriefA = document.getElementById('detailBriefA');
const $detailBriefB = document.getElementById('detailBriefB');
const $detailBriefC = document.getElementById('detailBriefC');
const $detailTextA = document.getElementById('detailTextA');
const $detailTextB = document.getElementById('detailTextB');
const $detailTextC = document.getElementById('detailTextC');

const $btnPlay = document.getElementById('btnPlay');
const $btnAutoPause = document.getElementById('btnAutoPause');
const $btnNext = document.getElementById('btnNext');
const $btnPauseNext = document.getElementById('btnPauseNext');
const $speedSelect = document.getElementById('speedSelect');
const $modeText = document.getElementById('modeText');

const $controls = document.getElementById('controls');
const $controlsTitle = document.getElementById('controlsTitle');

// 配置开关与常量
const ENABLE_BUBBLE = false; // 禁用概括气泡（保留 DOM 与逻辑，便于恢复）
const STATE = Object.freeze({
  Idle: 'idle',
  Playing: 'playing',
  PausedKeyframe: 'pausedKeyframe'
});
const STAGE_IDS = ['A','B','C'];
const NODE_THRESHOLDS = [1/6, 3/6, 5/6];
const SAMPLES_PER_CYCLE = 800;
const BASE_CYCLE_DURATION = 10_000; // 10s/轮（1x）
const TYPE_SPEED_CPS = 20; // 每秒 20 个字符
const TYPE_INTERVAL_MS = Math.round(1000 / TYPE_SPEED_CPS);
const SMALL_VIEWPORT_W = 1200; // 小屏阈值
const VIZ_SHIFT_Y = 100; // 整体下移 100px

// 状态机
let state = STATE.Idle;
let autoPause = false; // 控制“下一个”按钮可用
let pauseAtNextKeyframe = false; // 下一关键帧暂停标志（保留逻辑）
let currentCycle = 0; // 0..2
let progress = 0; // 当前轮进度 0..1
let speedMultiplier = parseFloat($speedSelect.value);

// 动画控制
let rafId = null;
let lastTs = 0;

// 几何：三轮路径点与采样
let spiral = {
  cycles: [], // [{points:[{x,y}], cumLen:[0..], nodes:[{x,y,progress}], pathEl, nodeEls:[{circle,text}] }]
  bbox: null
};

// 节点弹出框状态
const popupState = {
  // cycles[i][j] => { el, cycleIndex, stageIndex, mode: 'detail'|'summary', typingId, finalTextDetail, finalTextSummary }
  cycles: Array.from({length: CYCLES.length}, () => Array(3).fill(null))
};

function getCurrentDataset(){
  return DATASETS[currentDatasetKey];
}

// 初始化
init();
function init(){
  // 绑定事件
  $btnPlay.addEventListener('click', onPlayClick);
  $btnAutoPause.addEventListener('click', onAutoPauseToggle);
  $btnNext.addEventListener('click', onNextClick);
  $btnPauseNext.addEventListener('click', onPauseNextClick);
  $speedSelect.addEventListener('change', onSpeedChange);
  window.addEventListener('resize', onResize);

  // 数据集切换
  $btnDatasetToggle.addEventListener('click', ()=>{
    const nextKey = currentDatasetKey === 'cz5' ? 'spacex' : 'cz5';
    switchDataset(nextKey);
  });

  // 键盘：空格 = 自动播放（完全等同于点击）
  window.addEventListener('keydown', (e)=>{
    const targetTag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    const isFormEl = ['input','textarea','select','button'].includes(targetTag);
    if(isFormEl) return;
    if(e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar'){
      e.preventDefault();
      $btnPlay.click();
    }
  });

  // 控制区：默认折叠，点击标题展开/收起
  $controlsTitle.addEventListener('click', toggleControlsFold);
  $controlsTitle.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' ' || e.code === 'Space'){
      e.preventDefault(); e.stopPropagation();
      toggleControlsFold();
    }
  });

  // 火箭图加载成功后显示，并隐藏 progressDot（作为兜底不移除）
  if($rocket){
    if($rocket.complete && $rocket.naturalWidth > 0){
      $rocket.classList.remove('hidden');
      $progressDot.style.opacity = '0';
    }else{
      $rocket.addEventListener('load', ()=>{
        $rocket.classList.remove('hidden');
        $progressDot.style.opacity = '0';
      });
      $rocket.addEventListener('error', ()=>{
        // 图片失败则保留 progressDot
        $rocket.classList.add('hidden');
        $progressDot.style.opacity = '1';
      });
    }
  }

  // 概括气泡：禁用显示
  if(!ENABLE_BUBBLE && $bubble){
    $bubble.classList.add('hidden');
  }

  // 初始头部与右侧内容
  renderHeader();
  renderCyclePanel(currentCycle);

  // 构建几何
  buildSpiral();

  // 进入待机
  updateUIState();
  positionProgressAtCurrent(); // rocket + dot + bubble(禁用不会显示)

  // 控制区保持折叠状态属性
  $controls.setAttribute('data-collapsed', 'true');
  $controlsTitle.setAttribute('aria-expanded', 'false');
}

/* 数据集切换 */
function renderHeader(){
  const ds = getCurrentDataset();
  document.title = ds.docTitle;
  if($headerTitle) $headerTitle.textContent = ds.headerTitle;
  // 切换按钮文案
  if($btnDatasetToggle){
    const other = currentDatasetKey === 'cz5' ? 'SpaceX' : '长征五号';
    $btnDatasetToggle.textContent = `切换到：${other}`;
    $btnDatasetToggle.setAttribute('aria-pressed', currentDatasetKey === 'cz5' ? 'true' : 'false');
  }
}

function switchDataset(nextKey){
  if(!DATASETS[nextKey] || nextKey === currentDatasetKey) return;

  // 停止动画
  if(rafId){ cancelAnimationFrame(rafId); rafId = null; }
  state = STATE.Idle;
  pauseAtNextKeyframe = false;
  progress = 0;
  currentCycle = 0;

  // 切换数据指针
  currentDatasetKey = nextKey;
  CYCLES = DATASETS[currentDatasetKey].cycles;

  // 清空弹窗
  clearAllPopups();

  // 更新头部与右侧面板
  renderHeader();
  renderCyclePanel(currentCycle);

  // 切换火箭图
  if($rocket){
    // 在加载新图片前显示 fallback 点
    $rocket.classList.add('hidden');
    $progressDot.style.opacity = '1';
    $rocket.src = DATASETS[currentDatasetKey].rocketSrc;
    
    // 重新绑定加载事件处理
    $rocket.onload = ()=>{
      $rocket.classList.remove('hidden');
      $progressDot.style.opacity = '0';
    };
    $rocket.onerror = ()=>{
      // 图片失败则保留 progressDot
      $rocket.classList.add('hidden');
      $progressDot.style.opacity = '1';
    };
  }

  // 重建几何并定位
  buildSpiral();
  highlightActiveCyclePath();
  positionProgressAtCurrent();
  updatePopupVisibilityByViewport();
  updateUIState();
}

/* 事件处理 */
function onPlayClick(){
  if(state === STATE.Playing) return;

  let restartingFromHead = false;

  // 若在关键帧停驻且已结束一轮，进入下一轮；若是最后一轮，则从第一轮重启
  if(state === STATE.PausedKeyframe && progress >= 1){
    const prevCycle = currentCycle;
    if(currentCycle < CYCLES.length - 1){
      currentCycle += 1;
      // 切换到下一轮：将上一轮弹窗降级为概括
      degradeCycleToSummary(prevCycle);
    }else{
      // 第三轮结束后：从头开始，并清空所有弹窗
      currentCycle = 0;
      restartingFromHead = true;
    }
    progress = 0;

    if(restartingFromHead){
      clearAllPopups();
    }

    renderCyclePanel(currentCycle);
    highlightActiveCyclePath();
    updatePopupVisibilityByViewport();
  }else{
    // 非关键帧启动：如果是“从头开始”，则先清空所有弹窗
    if(currentCycle === 0 && progress === 0){
      clearAllPopups();
    }
  }

  startPlaying();
}

function onAutoPauseToggle(){
  autoPause = !autoPause;
  $btnAutoPause.setAttribute('aria-pressed', String(autoPause));
  $btnAutoPause.textContent = `自动暂停：${autoPause ? '开' : '关'}`;
  updateUIState();
}

function onNextClick(){
  if(!autoPause) return;
  if(state !== STATE.PausedKeyframe) return;
  if(currentCycle >= CYCLES.length - 1){
    // 最后一轮末尾，保持置灰
    return;
  }
  // 进入下一轮并播放
  const prevCycle = currentCycle;
  currentCycle += 1;

  // 降级上一轮到概括
  degradeCycleToSummary(prevCycle);

  progress = 0;
  renderCyclePanel(currentCycle);
  highlightActiveCyclePath();
  updatePopupVisibilityByViewport();
  startPlaying();
}

function onPauseNextClick(){
  if(state !== STATE.Playing) return;
  pauseAtNextKeyframe = true;
  // 小提示
  $modeText.textContent = '状态：播放中（将在下一关键帧停住）';
}

function onSpeedChange(){
  const v = parseFloat($speedSelect.value);
  if(!Number.isFinite(v) || v <= 0) return;
  speedMultiplier = v;
}

function toggleControlsFold(){
  const collapsed = $controls.getAttribute('data-collapsed') !== 'false';
  const newVal = collapsed ? 'false' : 'true';
  $controls.setAttribute('data-collapsed', newVal);
  $controlsTitle.setAttribute('aria-expanded', String(newVal === 'false'));
}

/* UI更新 */
function updateUIState(){
  $btnPlay.disabled = (state === STATE.Playing);
  $btnPauseNext.disabled = (state !== STATE.Playing);
  // “下一个”仅在自动暂停=开 且 在关键帧 才可用；第三轮末尾置灰
  const canNext = autoPause && state === STATE.PausedKeyframe && currentCycle < CYCLES.length - 1;
  $btnNext.disabled = !canNext;

  // 模式行
  if(state === STATE.Idle){
    $modeText.textContent = '状态：待机';
  }else if(state === STATE.Playing){
    $modeText.textContent = '状态：播放中';
  }else{
    if(currentCycle === CYCLES.length - 1){
      $modeText.textContent = '状态：已在关键帧停住（第三轮末）。';
    }else{
      $modeText.textContent = '状态：已在关键帧停住。';
    }
  }
}

function renderCyclePanel(cycleIndex){
  const data = CYCLES[cycleIndex];
  $cycleTitle.textContent = data.title;
  $cycleYear.textContent = data.year;

  // 三阶段详情与概括（右侧）
  const [A,B,C] = data.stages;
  $detailBriefA.textContent = A.summary;
  $detailTextA.textContent = A.detail;
  $detailBriefB.textContent = B.summary;
  $detailTextB.textContent = B.detail;
  $detailBriefC.textContent = C.summary;
  $detailTextC.textContent = C.detail;
}

/* 螺旋几何构建与渲染 */
function buildSpiral(){
  // 清空 SVG
  while($svg.firstChild) $svg.removeChild($svg.firstChild);

  // SVG 尺寸
  const w = $viz.clientWidth;
  const h = $viz.clientHeight;
  $svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  // 计算螺旋参数：三圈，向上抬升，不越界
  const margin = 40;
  const centerX = w * 0.52;
  const centerY = h * 0.80; // 基础中心
  const totalTurns = 3;
  const tStart = 0;
  const tEnd = totalTurns * 2 * Math.PI;

  // 最大半径不越界
  const maxR = Math.max(10, Math.min(centerX - margin, w - centerX - margin));
  const a = Math.max(8, maxR * 0.12); // 起始半径
  const b = (maxR - a) / (tEnd - tStart); // 每弧度增长

  // 抬升量，确保顶部留白 margin
  const lift = (centerY - margin) / (tEnd - tStart);

  // 采样并分圈
  spiral.cycles = [];
  for(let k=0; k<totalTurns; k++){
    spiral.cycles.push({ points: [], cumLen: [], nodes: [], pathEl: null, nodeEls: [] });
  }

  // 生成每圈的采样点
  for(let k=0; k<totalTurns; k++){
    const t0 = k * 2 * Math.PI;
    const t1 = (k+1) * 2 * Math.PI;
    const steps = SAMPLES_PER_CYCLE;
    const pts = [];
    for(let i=0; i<=steps; i++){
      const t = t0 + (t1 - t0) * (i/steps);
      const r = a + b * t;
      const x = centerX + r * Math.cos(t);
      const y = centerY - lift * t + r * Math.sin(t) * 0.15 + VIZ_SHIFT_Y; // 整体下移 100px
      pts.push({x, y, t});
    }
    // 累积长度
    const cum = [0];
    for(let i=1; i<pts.length; i++){
      const dx = pts[i].x - pts[i-1].x;
      const dy = pts[i].y - pts[i-1].y;
      cum.push(cum[i-1] + Math.hypot(dx, dy));
    }
    spiral.cycles[k].points = pts;
    spiral.cycles[k].cumLen = cum;

    // 阶段节点：A/B/C 在 1/6、3/6、5/6 处
    const nodeProgress = [1/6, 3/6, 5/6];
    spiral.cycles[k].nodes = nodeProgress.map(p => {
      const {x,y,dx,dy} = getPointAtProgress(k, p, pts, cum);
      return {x, y, dx, dy, progress: p};
    });
  }

  // 绘制三条路径
  for(let k=0; k<totalTurns; k++){
    const d = toPathD(spiral.cycles[k].points);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('class', 'spiral-path' + (k===currentCycle ? ' active' : ''));
    $svg.appendChild(path);
    spiral.cycles[k].pathEl = path;

    // 绘制节点与 A/B/C 标签
    spiral.cycles[k].nodes.forEach((node, idx)=>{
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', node.x);
      c.setAttribute('cy', node.y);
      c.setAttribute('r', 4.5);
      c.setAttribute('class', 'stage-node');
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t.setAttribute('x', node.x + 8);
      t.setAttribute('y', node.y - 6);
      t.setAttribute('class', 'stage-label');
      t.textContent = ['A','B','C'][idx];
      $svg.appendChild(c);
      $svg.appendChild(t);
      spiral.cycles[k].nodeEls.push({circle: c, text: t});
    });
  }

  spiral.bbox = {width: w, height: h};

  // 更新到正确位置
  positionProgressAtCurrent();
}

function toPathD(points){
  if(points.length === 0) return '';
  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for(let i=1; i<points.length; i++){
    d += ` L ${points[i].x.toFixed(2)} ${points[i].y.toFixed(2)}`;
  }
  return d;
}

function highlightActiveCyclePath(){
  spiral.cycles.forEach((c, idx)=>{
    if(c.pathEl){
      if(idx === currentCycle) c.pathEl.classList.add('active');
      else c.pathEl.classList.remove('active');
    }
  });
}

/* 位置查询 */
function getPointAtProgress(cycleIndex, p, pts, cum){
  const points = pts || spiral.cycles[cycleIndex].points;
  const lens = cum || spiral.cycles[cycleIndex].cumLen;
  const total = lens[lens.length - 1];
  const target = p * total;
  // 二分查找
  let lo = 0, hi = lens.length - 1;
  while(lo < hi){
    const mid = (lo + hi) >> 1;
    if(lens[mid] < target) lo = mid + 1; else hi = mid;
  }
  const i = Math.max(1, lo);
  const l0 = lens[i-1], l1 = lens[i];
  const t = (target - l0) / Math.max(1e-6, (l1 - l0));
  const x = points[i-1].x + (points[i].x - points[i-1].x) * t;
  const y = points[i-1].y + (points[i].y - points[i-1].y) * t;
  // 切向量（用于气泡与火箭朝向）
  const dx = points[i].x - points[i-1].x;
  const dy = points[i].y - points[i-1].y;
  return {x, y, dx, dy};
}

/* 进度与载具 + 概括气泡渲染 */
function positionProgressAtCurrent(){
  const pt = getPointAtProgress(currentCycle, progress);
  // 进度点
  $progressDot.style.left = `${pt.x}px`;
  $progressDot.style.top = `${pt.y}px`;

  // 火箭：位置 + 朝向 + 比例变化（scaleX = |cos(angle)|，且最小 0.08）；整体放大 200%
  if($rocket && !$rocket.classList.contains('hidden')){
    const angle = Math.atan2(pt.dy || 0, pt.dx || 1); // 弧度
    const sX = Math.max(0.08, Math.abs(Math.cos(angle)));
    $rocket.style.left = `${pt.x}px`;
    $rocket.style.top = `${pt.y}px`;
    // 顺序：translate -> rotate -> uniform scale(2) -> scaleX(sX)
    $rocket.style.transform = `translate(-50%, -50%) rotate(${angle}rad) scale(2) scaleX(${sX})`;
  }

  // 概括气泡（禁用）
  updateStageBubble(pt);
}

function showStageBubbleForProgress(){
  if(!ENABLE_BUBBLE){
    hideBubble();
    return;
  }
  // 根据 progress 所在阶段显示或隐藏气泡
  if(state === STATE.PausedKeyframe && progress >= 1){
    // 到达关键帧，不再显示概括气泡（右侧展示详情）
    hideBubble();
    return;
  }
  const sectionIndex = getSectionIndex(progress); // 0:A,1:B,2:C
  const stage = CYCLES[currentCycle].stages[sectionIndex];
  $bubbleStageBadge.textContent = stage.id;
  $bubbleStageTitle.textContent = stage.name;
  $bubbleSummary.textContent = stage.summary;
  $bubble.classList.remove('hidden');
}

function hideBubble(){
  if($bubble && !$bubble.classList.contains('hidden')){
    $bubble.classList.add('hidden');
  }
}

function getSectionIndex(p){
  // 阶段区间：[0,1/3)->A, [1/3,2/3)->B, [2/3,1)->C
  if(p < 1/3) return 0;
  if(p < 2/3) return 1;
  return 2;
}

function updateStageBubble(pt){
  if(!ENABLE_BUBBLE || !$bubble){
    hideBubble();
    return;
  }
  // 在播放区间显示气泡
  if(state === STATE.Playing || (state === STATE.Idle && progress > 0 && progress < 1)){
    showStageBubbleForProgress();
  }else{
    hideBubble();
    return;
  }
  // 定位气泡：根据切向量确定象限
  const rect = $viz.getBoundingClientRect();
  const bubbleRect = $bubble.getBoundingClientRect();
  const offset = 14; // 气泡与点的偏移
  let bx = pt.x, by = pt.y;
  // 选择象限
  const dx = pt.dx || 1, dy = pt.dy || -1;
  const right = dx >= 0, down = dy >= 0;
  if(right && down){
    bx += offset; by += offset;
  }else if(right && !down){
    bx += offset; by -= (bubbleRect.height + offset);
  }else if(!right && down){
    bx -= (bubbleRect.width + offset); by += offset;
  }else{
    bx -= (bubbleRect.width + offset); by -= (bubbleRect.height + offset);
  }
  // 边界钳制
  bx = Math.min(Math.max(6, bx), rect.width - bubbleRect.width - 6);
  by = Math.min(Math.max(6, by), rect.height - bubbleRect.height - 6);

  $bubble.style.left = `${bx}px`;
  $bubble.style.top = `${by}px`;
}

/* 节点弹出框：创建、降级、布局、流式输出 */
function ensureDetailPopup(cycleIndex, stageIndex){
  // 已存在则忽略
  if(popupState.cycles[cycleIndex][stageIndex]) return;

  const stage = CYCLES[cycleIndex].stages[stageIndex];
  const el = document.createElement('div');
  el.className = 'node-popup';
  el.setAttribute('data-cycle', String(cycleIndex));
  el.setAttribute('data-stage', STAGE_IDS[stageIndex]);

  // 头部
  const head = document.createElement('div');
  head.className = 'np-head';
  const badge = document.createElement('span');
  badge.className = 'stage-badge';
  badge.textContent = stage.id;
  const title = document.createElement('span');
  title.className = 'np-title';
  title.textContent = stage.name;
  head.appendChild(badge);
  head.appendChild(title);

  // 正文（流式输出仅用于详情）
  const body = document.createElement('div');
  body.className = 'np-body';
  body.textContent = ''; // 打字开始为空

  el.appendChild(head);
  el.appendChild(body);

  // 先添加到 DOM 以便测量
  $nodePopups.appendChild(el);

  // 初始定位（基于节点 pt + 切向象限 + 边界钳制 + 碰撞规避）
  placePopupForStage(el, cycleIndex, stageIndex);

  // 启动打字机（20 字/秒）
  const typingId = typeIn(el.querySelector('.np-body'), stage.detail);

  // 记录状态
  popupState.cycles[cycleIndex][stageIndex] = {
    el,
    cycleIndex,
    stageIndex,
    mode: 'detail',
    typingId,
    finalTextDetail: stage.detail,
    finalTextSummary: stage.summary
  };

  // 视口限制：小屏只显示本轮详情 + 上一轮概括
  updatePopupVisibilityByViewport();
}

function placePopupForStage(el, cycleIndex, stageIndex){
  const p = NODE_THRESHOLDS[stageIndex];
  const pt = getPointAtProgress(cycleIndex, p);
  const rectViz = $viz.getBoundingClientRect();

  // 预估尺寸：先获取当前尺寸
  const r = el.getBoundingClientRect();
  const offset = 14;

  // 根据切向量确定象限与箭头方向
  const dx = pt.dx || 1;
  const dy = pt.dy || -1;
  const right = dx >= 0, down = dy >= 0;

  let bx, by, arrow;
  if(right && down){
    // 右下
    bx = pt.x + offset; by = pt.y + offset; arrow = 'left';
  }else if(right && !down){
    // 右上
    bx = pt.x + offset; by = pt.y - (r.height + offset); arrow = 'left';
  }else if(!right && down){
    // 左下
    bx = pt.x - (r.width + offset); by = pt.y + offset; arrow = 'right';
  }else{
    // 左上
    bx = pt.x - (r.width + offset); by = pt.y - (r.height + offset); arrow = 'right';
  }
  // 边界钳制
  bx = Math.min(Math.max(6, bx), rectViz.width - r.width - 6);
  by = Math.min(Math.max(6, by), rectViz.height - r.height - 6);

  el.style.left = `${bx}px`;
  el.style.top = `${by}px`;
  el.setAttribute('data-arrow', arrow);

  // 简单碰撞规避：与现有弹窗错位
  resolveCollisions(el);
}

function resolveCollisions(el){
  const maxIter = 12;
  const step = 14;
  let iter = 0;

  function overlap(a, b){
    return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
  }

  function getRects(excludeEl){
    const rects = [];
    const nodes = Array.from($nodePopups.querySelectorAll('.node-popup'));
    nodes.forEach(n=>{
      if(n === excludeEl) return;
      if(n.style.display === 'none') return;
      rects.push(n.getBoundingClientRect());
    });
    return rects;
  }

  while(iter < maxIter){
    const rect = el.getBoundingClientRect();
    const rects = getRects(el);
    let collided = null;
    for(const r of rects){
      if(overlap(rect, r)){ collided = r; break; }
    }
    if(!collided) break;

    // 简单错位策略：向下错一层，不行则向右，交替尝试
    if(iter % 2 === 0){
      const top = parseFloat(el.style.top || '0');
      el.style.top = `${top + step}px`;
    }else{
      const left = parseFloat(el.style.left || '0');
      el.style.left = `${left + step}px`;
    }

    // 边界钳制
    const viz = $viz.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    let nx = parseFloat(el.style.left || '0');
    let ny = parseFloat(el.style.top || '0');
    if(er.right > viz.right - 6) nx = nx - (er.right - (viz.right - 6));
    if(er.left < viz.left + 6) nx = 6;
    if(er.bottom > viz.bottom - 6) ny = ny - (er.bottom - (viz.bottom - 6));
    if(er.top < viz.top + 6) ny = 6;
    el.style.left = `${nx}px`;
    el.style.top = `${ny}px`;

    iter++;
  }
}

function typeIn(container, fullText){
  // 流式输出：每秒 20 个字符
  const text = String(fullText || '');
  let i = 0;
  container.textContent = '';
  const id = setInterval(()=>{
    if(i >= text.length){
      clearInterval(id);
      return;
    }
    // 追加字符
    container.textContent += text[i];
    i++;
  }, TYPE_INTERVAL_MS);
  return id;
}

function degradeCycleToSummary(cycleIndex){
  const arr = popupState.cycles[cycleIndex];
  if(!arr) return;
  for(let i=0;i<3;i++){
    const p = arr[i];
    if(!p) continue;
    if(p.mode === 'summary') continue;
    // 停止打字机
    if(p.typingId) clearInterval(p.typingId);
    // 替换为概括
    const body = p.el.querySelector('.np-body');
    body.textContent = p.finalTextSummary;
    p.mode = 'summary';
  }
}

function finalizeAllToSummary(){
  for(let c=0; c<CYCLES.length; c++){
    degradeCycleToSummary(c);
  }
}

/* 清空所有弹窗（从头开始或切换数据集时调用） */
function clearAllPopups(){
  for(let c=0;c<popupState.cycles.length;c++){
    for(let s=0;s<3;s++){
      const p = popupState.cycles[c][s];
      if(!p) continue;
      if(p.typingId) clearInterval(p.typingId);
      if(p.el && p.el.parentNode) p.el.parentNode.removeChild(p.el);
      popupState.cycles[c][s] = null;
    }
  }
  // 清空容器，重置状态结构（使用当前数据集长度）
  $nodePopups.innerHTML = '';
  popupState.cycles = Array.from({length: CYCLES.length}, () => Array(3).fill(null));
}

/* 视口策略：小屏仅显示“本轮详情 + 上一轮概括”，更早的隐藏 */
function updatePopupVisibilityByViewport(){
  const small = window.innerWidth < SMALL_VIEWPORT_W;
  for(let c=0; c<CYCLES.length; c++){
    for(let s=0; s<3; s++){
      const p = popupState.cycles[c][s];
      if(!p) continue;
      if(!small){
        p.el.style.display = '';
      }else{
        // 小屏：仅显示 本轮 + 上一轮
        if(c === currentCycle || c === currentCycle - 1){
          p.el.style.display = '';
        }else{
          p.el.style.display = 'none';
        }
      }
    }
  }
}

/* 动画主循环 */
function startPlaying(){
  if(rafId) cancelAnimationFrame(rafId);
  state = STATE.Playing;
  updateUIState();
  lastTs = performance.now();
  rafId = requestAnimationFrame(tick);
}

function tick(ts){
  const dt = Math.min(64, ts - lastTs); // 上限，防卡顿跳跃
  lastTs = ts;

  const prevProgress = progress;

  // 进度推进
  const cycleDuration = BASE_CYCLE_DURATION / speedMultiplier;
  progress += dt / cycleDuration;

  // 经过节点时触发详情弹窗
  checkNodeTriggers(prevProgress, progress);

  if(progress >= 1){
    progress = 1;
    positionProgressAtCurrent();

    // 到达关键帧：统一停驻
    state = STATE.PausedKeyframe;
    cancelAnimationFrame(rafId); rafId = null;

    // 轮末：更新 UI
    highlightActiveCyclePath();
    updateUIState();
    hideBubble(); // 轮末展示详情，概括气泡隐藏（本版本整体禁用）

    // 注意：第三轮末不再“全部降级为概括”，保留第三轮详情

    return;
  }

  // 更新位置与概括气泡
  positionProgressAtCurrent();

  // 下一帧
  rafId = requestAnimationFrame(tick);
}

function checkNodeTriggers(prevP, newP){
  const eps = 0.003; // 触发窗口

  for(let i=0;i<NODE_THRESHOLDS.length;i++){
    const t = NODE_THRESHOLDS[i];
    // 从左到右经过：prev < t <= newP + eps
    if(prevP < t && newP + eps >= t){
      ensureDetailPopup(currentCycle, i);
    }
  }
}

/* 窗口尺寸变化 */
function onResize(){
  const prevProgress = progress;
  const prevCycle = currentCycle;

  buildSpiral();

  // 保持当前轮与进度
  currentCycle = prevCycle;
  progress = prevProgress;
  highlightActiveCyclePath();
  positionProgressAtCurrent();

  // 重排所有弹窗（基于新的几何）
  repositionAllPopups();

  // 更新小屏策略
  updatePopupVisibilityByViewport();
}

function repositionAllPopups(){
  for(let c=0;c<CYCLES.length;c++){
    for(let s=0;s<3;s++){
      const p = popupState.cycles[c][s];
      if(!p) continue;
      placePopupForStage(p.el, c, s);
    }
  }
}

/* 启动时高亮当前路径 */
highlightActiveCyclePath();