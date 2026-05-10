const petals = document.getElementById('petals');
    const glitter = document.getElementById('glitter');
    const startJourney = document.getElementById('startJourney');
    const sendLove = document.getElementById('sendLove');
    const bigReveal = document.getElementById('bigReveal');
    const openCurtains = document.getElementById('openCurtains');
    const toTop = document.getElementById('toTop');

    for(let i=0;i<18;i++){
      const p=document.createElement('span');
      p.className='petal';
      p.style.left=Math.random()*100+'vw';
      p.style.animationDuration=(8+Math.random()*8)+'s';
      p.style.animationDelay=(Math.random()*8)+'s';
      p.style.setProperty('--drift', ((Math.random()*180)-90)+'px');
      p.style.opacity=(0.35+Math.random()*0.45).toFixed(2);
      p.style.transform=`scale(${0.7+Math.random()*0.7})`;
      petals.appendChild(p);
    }

    for(let i=0;i<22;i++){
      const s=document.createElement('span');
      s.style.left=(8+Math.random()*84)+'%';
      s.style.top=(10+Math.random()*78)+'%';
      s.style.animationDelay=(Math.random()*0.9)+'s';
      glitter.appendChild(s);
    }

    startJourney.addEventListener('click', () => {
      document.getElementById('scene1').scrollIntoView({behavior:'smooth', block:'center'});
    });

    sendLove.addEventListener('click', () => {
      const note=document.createElement('div');
      note.textContent='For Leah, with all our love 💖';
      Object.assign(note.style,{
        position:'fixed',
        left:'50%',
        top:'12%',
        transform:'translateX(-50%)',
        padding:'1rem 1.25rem',
        borderRadius:'999px',
        background:'rgba(255,245,248,.1)',
        color:'#ffe4ec',
        border:'1px solid rgba(255,255,255,.12)',
        backdropFilter:'blur(12px)',
        boxShadow:'0 20px 40px rgba(0,0,0,.28)',
        zIndex:'30',
        opacity:'0',
        transition:'opacity .35s ease, transform .45s ease'
      });
      document.body.appendChild(note);

      requestAnimationFrame(()=>{
        note.style.opacity='1';
        note.style.transform='translateX(-50%) translateY(8px)';
      });

      setTimeout(()=>{
        note.style.opacity='0';
        note.style.transform='translateX(-50%) translateY(-10px)';
        setTimeout(()=>note.remove(),500);
      },1600);
    });

    let opened=false;
    openCurtains.addEventListener('click', () => {
      if(opened) return;
      opened=true;
      bigReveal.classList.add('opened');
      openCurtains.textContent='Revealed for Leah';
      openCurtains.disabled=true;
      openCurtains.style.opacity='.72';
      openCurtains.style.cursor='default';
    });

    toTop.addEventListener('click', () => {
      window.scrollTo({top:0, behavior:'smooth'});
    });

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
        }
      });
    }, {threshold:0.18});

    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
