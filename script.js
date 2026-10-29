(function(){
  var root=document.documentElement,btns=document.querySelectorAll('[data-theme-set]');
  function apply(m){
    if(m==='light'||m==='dark')root.setAttribute('data-theme',m);else root.removeAttribute('data-theme');
    btns.forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-theme-set')===m))});
  }
  var saved='system';try{saved=localStorage.getItem('tema')||'system'}catch(e){}
  apply(saved);
  btns.forEach(function(b){b.addEventListener('click',function(){
    var m=b.getAttribute('data-theme-set');try{localStorage.setItem('tema',m)}catch(e){}apply(m);
  })});
})();

(function(){
  var c=document.getElementById('code-bg'),x=c.getContext('2d');
  var S=["class Paciente < ApplicationRecord","has_many :turnos, dependent: :destroy","rails db:migrate","SELECT * FROM pacientes WHERE activo = true;","await Cliente.findAll({ where: { activo: true } });","db.pedidos.find({ estado: \"pendiente\" })","const app = express();","app.use(cors());","git commit -m \"feat: facturacion electronica\"","git push origin main","export default function App() {","useEffect(() => { cargar(); }, []);","CREATE INDEX idx_fecha ON ventas(fecha);","JOIN pedidos p ON p.cliente_id = c.id","router.get(\"/api/pacientes\", listar);","try { await guardar(); } catch (e) { log(e); }","return res.status(201).json(nuevo);","npm run build && npm test"];
  var W=0,H=0,items=[],col='#2D4BFF',mut='#566074',raf;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function colors(){var s=getComputedStyle(document.documentElement);col=s.getPropertyValue('--cobalt').trim()||col;mut=s.getPropertyValue('--muted').trim()||mut}
  function make(init){return{t:S[Math.random()*S.length|0],x:Math.random()*W,y:init?Math.random()*H:H+20,v:.12+Math.random()*.28,fs:11+Math.random()*5,a:.08+Math.random()*.13,c:Math.random()<.35}}
  function size(){
    var d=Math.min(devicePixelRatio||1,2),w=innerWidth,h=document.getElementById('experiencia').offsetTop,regen=(w!==W||Math.abs(h-H)>40);
    W=w;H=h;c.style.height=H+'px';c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
    if(regen){var n=Math.max(8,Math.min(Math.round(W*H/20000),40));items=[];for(var i=0;i<n;i++)items.push(make(true))}
  }
  function draw(){
    x.clearRect(0,0,W,H);
    for(var i=0;i<items.length;i++){
      var o=items[i],f=Math.min(1,Math.max(0,o.y/120),Math.max(0,(H-o.y)/120));
      x.font=o.fs+'px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace';
      x.globalAlpha=o.a*f;x.fillStyle=o.c?col:mut;x.fillText(o.t,o.x,o.y);
      if(!reduce){o.y-=o.v;if(o.y<-20)items[i]=make(false)}
    }
    x.globalAlpha=1;
  }
  function loop(){draw();raf=requestAnimationFrame(loop)}
  colors();size();draw();if(!reduce)loop();
  addEventListener('load',function(){size();draw()});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){size();draw()});
  addEventListener('resize',function(){size();draw()});
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){colors();draw()});
  new MutationObserver(function(){colors();draw()}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  document.addEventListener('visibilitychange',function(){if(reduce)return;if(document.hidden)cancelAnimationFrame(raf);else loop()});
})();