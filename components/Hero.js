import React, { useState } from 'react';


const tooltipStyle = {
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
};

const Hero = () => {
  const [tooltipText, setTooltipText] = useState('');

  const handleTooltipHover = (text) => {
    setTooltipText(text);
  };

  const handleTooltipLeave = () => {
    setTooltipText('');
  };

  return (
   <div>
    <div className="two-column-layout">
      <div className="left-column">
      <span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Viribus')}
  onMouseLeave={handleTooltipLeave}
>
  Viribus 
</span> 


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('absumptis')}
  onMouseLeave={handleTooltipLeave}
> absumptis
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('expalluit')}
  onMouseLeave={handleTooltipLeave}
> expalluit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('illa')}
  onMouseLeave={handleTooltipLeave}
> illa,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('citaeque')}
  onMouseLeave={handleTooltipLeave}
> citaeque
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('victa')}
  onMouseLeave={handleTooltipLeave}
> victa
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('labore')}
  onMouseLeave={handleTooltipLeave}
> labore
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('fugae,')}
  onMouseLeave={handleTooltipLeave}
> fugae,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('spectans')}
  onMouseLeave={handleTooltipLeave}
> spectans
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Peneidas')}
  onMouseLeave={handleTooltipLeave}
> Peneidas
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('undas')}
  onMouseLeave={handleTooltipLeave}
> undas:
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Fer')}
  onMouseLeave={handleTooltipLeave}
> "Fer
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pater')}
  onMouseLeave={handleTooltipLeave}
> pater"
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('inquit')}
  onMouseLeave={handleTooltipLeave}
> inquit
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('opem')}
  onMouseLeave={handleTooltipLeave}
> "opem,
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('si')}
  onMouseLeave={handleTooltipLeave}
> si
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('flumina')}
  onMouseLeave={handleTooltipLeave}
> flumina
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('numen')}
  onMouseLeave={handleTooltipLeave}
> numen
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('habetis')}
  onMouseLeave={handleTooltipLeave}
> habetis;
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('qua')}
  onMouseLeave={handleTooltipLeave}
> qua
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nimium')}
  onMouseLeave={handleTooltipLeave}
> nimium
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nimium')}
  onMouseLeave={handleTooltipLeave}
> nimium
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('placui')}
  onMouseLeave={handleTooltipLeave}
> placui,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('mutando')}
  onMouseLeave={handleTooltipLeave}
> mutando
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('perde')}
  onMouseLeave={handleTooltipLeave}
> perde
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('figuram')}
  onMouseLeave={handleTooltipLeave}
> figuram
</span>



<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('figuram')}
  onMouseLeave={handleTooltipLeave}
> figuram!"
</span>







<span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('Vix')}
    onMouseLeave={handleTooltipLeave}
  >
    Vix
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('prece')}
    onMouseLeave={handleTooltipLeave}
  >
    prece
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('finita,')}
    onMouseLeave={handleTooltipLeave}
  >
    finita,
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('torpor')}
    onMouseLeave={handleTooltipLeave}
  >
    torpor
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('gravis')}
    onMouseLeave={handleTooltipLeave}
  >
    gravis
  </span>

  <span
    style={tooltipStyle}
    onMouseEnter={() => handleTooltipHover('occupat')}
    onMouseLeave={handleTooltipLeave}
  >
    occupat
  </span>



  <span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('artus')}
  onMouseLeave={handleTooltipLeave}
>
  artus,
</span>



<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('mollia')}
  onMouseLeave={handleTooltipLeave}
>
  mollia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cinguntur')}
  onMouseLeave={handleTooltipLeave}
>
  cinguntur
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tenui')}
  onMouseLeave={handleTooltipLeave}
>
  tenui
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('praecordia')}
  onMouseLeave={handleTooltipLeave}
>
  praecordia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('libro,')}
  onMouseLeave={handleTooltipLeave}
>
  libro,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('frondem')}
  onMouseLeave={handleTooltipLeave}
>
  frondem
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('crines,')}
  onMouseLeave={handleTooltipLeave}
>
  crines,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ramos')}
  onMouseLeave={handleTooltipLeave}
>
  ramos
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('brachia')}
  onMouseLeave={handleTooltipLeave}
>
  brachia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('crescunt')}
  onMouseLeave={handleTooltipLeave}
>
  crescunt:
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pes')}
  onMouseLeave={handleTooltipLeave}
>
  pes
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('modo')}
  onMouseLeave={handleTooltipLeave}
>
  modo
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tam')}
  onMouseLeave={handleTooltipLeave}
>
  tam
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('velox')}
  onMouseLeave={handleTooltipLeave}
>
  velox
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pigris')}
  onMouseLeave={handleTooltipLeave}
>
  pigris
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('radicibus')}
  onMouseLeave={handleTooltipLeave}
>
  radicibus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('haeret,')}
  onMouseLeave={handleTooltipLeave}
>
  haeret,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ora')}
  onMouseLeave={handleTooltipLeave}
>
  ora
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cacumen')}
  onMouseLeave={handleTooltipLeave}
>
  cacumen
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('habet;')}
  onMouseLeave={handleTooltipLeave}
>
  habet;
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('remanet')}
  onMouseLeave={handleTooltipLeave}
>
  remanet
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nitor')}
  onMouseLeave={handleTooltipLeave}
>
  nitor
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('unus')}
  onMouseLeave={handleTooltipLeave}
>
  unus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('illa,')}
  onMouseLeave={handleTooltipLeave}
>
  illa.
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Hanc')}
  onMouseLeave={handleTooltipLeave}
>
  Hanc
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('quoque')}
  onMouseLeave={handleTooltipLeave}
>
  quoque
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Phoebus')}
  onMouseLeave={handleTooltipLeave}
>
  Phoebus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('amat,')}
  onMouseLeave={handleTooltipLeave}
>
  amat,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('positaque')}
  onMouseLeave={handleTooltipLeave}
>
  positaque
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('in')}
  onMouseLeave={handleTooltipLeave}
>
  in
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('stipite')}
  onMouseLeave={handleTooltipLeave}
>
  stipite
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('dextra')}
  onMouseLeave={handleTooltipLeave}
>
  dextra
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('sentit')}
  onMouseLeave={handleTooltipLeave}
>
  sentit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('adhuc')}
  onMouseLeave={handleTooltipLeave}
>
  adhuc
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('trepidare')}
  onMouseLeave={handleTooltipLeave}
>
  trepidare
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('novo')}
  onMouseLeave={handleTooltipLeave}
>
  novo
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('sub')}
  onMouseLeave={handleTooltipLeave}
>
  sub
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cortice')}
  onMouseLeave={handleTooltipLeave}
>
  cortice
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pectus,')}
  onMouseLeave={handleTooltipLeave}
>
  pectus,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('complexusque')}
  onMouseLeave={handleTooltipLeave}
>
  complexusque
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('suis')}
  onMouseLeave={handleTooltipLeave}
>
  suis
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ramos,')}
  onMouseLeave={handleTooltipLeave}
>
  ramos,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ut')}
  onMouseLeave={handleTooltipLeave}
>
  ut
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('membra,')}
  onMouseLeave={handleTooltipLeave}
>
  membra,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('lacertis')}
  onMouseLeave={handleTooltipLeave}
>
  lacertis
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('oscula')}
  onMouseLeave={handleTooltipLeave}
>
  oscula
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('dat')}
  onMouseLeave={handleTooltipLeave}
>
  dat
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ligno:')}
  onMouseLeave={handleTooltipLeave}
>
  ligno:
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('refugit')}
  onMouseLeave={handleTooltipLeave}
>
  refugit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tamen')}
  onMouseLeave={handleTooltipLeave}
>
  tamen
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('oscula')}
  onMouseLeave={handleTooltipLeave}
>
  oscula
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('lignum.')}
  onMouseLeave={handleTooltipLeave}
>
  lignum.
</span>


<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Cui')}
  onMouseLeave={handleTooltipLeave}
>
  Cui
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('deus:')}
  onMouseLeave={handleTooltipLeave}
>
  deus:
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('«at')}
  onMouseLeave={handleTooltipLeave}
>
  «at
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('quoniam')}
  onMouseLeave={handleTooltipLeave}
>
  quoniam
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('coniunx')}
  onMouseLeave={handleTooltipLeave}
>
  coniunx
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('mea')}
  onMouseLeave={handleTooltipLeave}
>
  mea
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('non')}
  onMouseLeave={handleTooltipLeave}
>
  non
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('potes')}
  onMouseLeave={handleTooltipLeave}
>
  potes
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('esse,')}
  onMouseLeave={handleTooltipLeave}
>
  esse,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('arbor')}
  onMouseLeave={handleTooltipLeave}
>
  arbor
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('eris')}
  onMouseLeave={handleTooltipLeave}
>
  eris
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('certe»')}
  onMouseLeave={handleTooltipLeave}
>
  certe»
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('dixit')}
  onMouseLeave={handleTooltipLeave}
>
  dixit
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('«mea;')}
  onMouseLeave={handleTooltipLeave}
>
  «mea;
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('semper')}
  onMouseLeave={handleTooltipLeave}
>
  semper
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('habēbunt')}
  onMouseLeave={handleTooltipLeave}
>
  habēbunt
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('te')}
  onMouseLeave={handleTooltipLeave}
>
  te
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('coma')}
  onMouseLeave={handleTooltipLeave}
>
  coma,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('te')}
  onMouseLeave={handleTooltipLeave}
>
  te
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('citharae,')}
  onMouseLeave={handleTooltipLeave}
>
  citharae,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('te')}
  onMouseLeave={handleTooltipLeave}
>
  te
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('nostrae')}
  onMouseLeave={handleTooltipLeave}
>
  nostrae,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('laure')}
  onMouseLeave={handleTooltipLeave}
>
  laure,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pharetrae')}
  onMouseLeave={handleTooltipLeave}
>
  pharetrae;
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('tu')}
  onMouseLeave={handleTooltipLeave}
>
  tu
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('ducibus')}
  onMouseLeave={handleTooltipLeave}
>
  ducibus
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Latiis')}
  onMouseLeave={handleTooltipLeave}
>
  Latiis
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('aderis')}
  onMouseLeave={handleTooltipLeave}
>
  aderis,
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('cum')}
  onMouseLeave={handleTooltipLeave}
>
  cum
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('laeta')}
  onMouseLeave={handleTooltipLeave}
>
  laeta
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('triumphum')}
  onMouseLeave={handleTooltipLeave}
>
  triumphum
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('vox')}
  onMouseLeave={handleTooltipLeave}
>
  vox
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('canet')}
  onMouseLeave={handleTooltipLeave}
>
  canet
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('et')}
  onMouseLeave={handleTooltipLeave}
>
  et
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('visent')}
  onMouseLeave={handleTooltipLeave}
>
  visent
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('longas')}
  onMouseLeave={handleTooltipLeave}
>
  longas
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('Capitolia')}
  onMouseLeave={handleTooltipLeave}
>
  Capitolia
</span>

<span
  style={tooltipStyle}
  onMouseEnter={() => handleTooltipHover('pompas')}
  onMouseLeave={handleTooltipLeave}
>
  pompas».
</span>


      </div>








      <div className="right-column">
        {tooltipText && (
          <div
            className='tooltip-text'
            style={{
              visibility: 'visible',
              opacity: '1',
            }}
          >
            <div className='fontgrande'>
              <h1>{tooltipText}</h1>
            </div>
            {/* Add your desired content for each tooltipText here */}
            {tooltipText === 'Viribus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> abl pl.     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


            {tooltipText === 'absumptis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> participio pl.     </></div>
                </div>
                <div className='bordosopra'>
                [absūmo], absūmis, absumpsi, absumptum, absūmĕre
                </div>
          
Esaurite
       
              </>
            )}


{tooltipText === 'expalluit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> ind. Perf. 3p. s.     </></div>
                </div>
                <div className='bordosopra'>
                [expallesco], expallescis, expallui, expallescĕre
                </div>
          
Impallidì
       
              </>
            )}


{tooltipText === 'illa' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> Pronom. Dimostrat.     </></div>
                <div className='analisi2'>   <> nom. Sing.     </></div>
                </div>
                <div className='bordosopra'>
     Ella
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'citaeque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> congiunzione     </></div>
               
                </div>
                <div className='bordosopra'>
                att + que
                </div>
          

       
              </>
            )}



{tooltipText === 'victa' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> abl. Participio pass     </></div>
                </div>
                <div className='bordosopra'>
                [vinco], vincis, vici, victum, vincĕre
                </div>
          
Vinta
       
              </>
            )}


{tooltipText === 'labore' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> abl. Sing. 3^ decl.     </></div>
                </div>
                <div className='bordosopra'>
               (labor, laboris)
                </div>
          
Forze
       
              </>
            )}
        

        
        
            
        {tooltipText === 'fugae,' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> gen. Sing. Compl. spec.     </></div>
                </div>
                <div className='bordosopra'>
legato a labore
                </div>
          
Dalla fatica
       
              </>
            )}


{tooltipText === 'spectans' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> participio pres. congiunto (gerundio)     </></div>
                </div>
                <div className='bordosopra'>
                [specto], spectas, spectavi, spectatum, spectāre
                </div>
          
Rivolgendosi
       
              </>
            )}
            


            {tooltipText === 'Peneidas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>acc. pl.     </></div>
                </div>
                <div className='bordosopra'>
                Attrib. di undas
                </div>
          
del Peneo
       
              </>
            )}

{tooltipText === 'undas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. pl.    </></div>
                </div>
                <div className='bordosopra'>
                Compl.ogg. di spectans
                </div>
          
Alle correnti
       
              </>
            )}


{tooltipText === 'Fer' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> imper.pres. 2^ps.     </></div>
                </div>
                <div className='bordosopra'>
                [fĕro], fĕrs, tuli, latum, fĕrre
                </div>
          
         Portami
       
              </>
            )}



{tooltipText === 'pater' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> vocativo. sing     </></div>
                </div>
                <div className='bordosopra'>
                (pătĕr, patris)
                </div>
          
oh Padre
       
              </>
            )}


{tooltipText === 'inquit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> indic. Pres.     </></div>
                </div>
               
                <div className='bordosopra'>
                [inquam], inquis, inquiī, n.e., n.e
                </div>
Disse
       
              </>
            )}



{tooltipText === 'opem' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing.    </></div>
                </div>
                <div className='bordosopra'>
                ops  [ops], opis
                </div>
          
Aiuto
       
              </>
            )}


{tooltipText === 'si' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> proposizione     </></div>
            
                </div>
                <div className='bordosopra'>
                Introduce una prop. condizionale
                </div>
          
Se
       
              </>
            )}

{tooltipText === 'flumina' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>nom. neut.    </></div>
                </div>
                <div className='bordosopra'>
                (flumen,is) 3^ decl.
                </div>
          
Fiumi
       
              </>
            )}


{tooltipText === 'numen' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>acc. sing. neutro      </></div>
                </div>
                <div className='bordosopra'>
                compl. ogg di habetis (nūmĕn, numinis)
                </div>
          
Potere
       
              </>
            )}

{tooltipText === 'habetis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> ind.pres 2pp.    </></div>
                </div>
                <div className='bordosopra'>
                [hăbĕo], hăbes, habui, habitum, hăbēre
                </div>
          
Avete
       
              </>
            )}



{tooltipText === 'qua' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> pronome     </></div>
                <div className='analisi2'>   <> pron. Rel. Femm. Abl.s. di causa  </></div>
                </div>
                <div className='bordosopra'>
                Per cui
                </div>
          
           
       
              </>
            )}


{tooltipText === 'nimium' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbo     </></div>
               
                </div>
                <div className='bordosopra'>
                (nimium, nimii)
                </div>
          
Troppo
       
          
          

       
              </>
            )}


{tooltipText === 'placui' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <>  ind.perf 1^ps.     </></div>
                </div>
                <div className='bordosopra'>
                [plăcĕo], plăces, placui, placitum, plăcēre
                </div>
          
Piacqui
       
              </>
            )}




{tooltipText === 'mutando' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> gerund. Dell’abl     </></div>
                </div>
                <div className='bordosopra'>
                [mūto], mūtas, mutavi, mutatum, mūtāre
                </div>
          
Mutando
       
              </>
            )}


            

{tooltipText === 'perde' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> imperat. 2^ps.     </></div>
                </div>
                <div className='bordosopra'>
                [perdo], perdis, perdidi, perditum, perdĕre
                </div>
          
Dissolvendo
       
              </>
            )}


{tooltipText === 'figuram' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
                (figură, figurae)
                </div>
          
Figura
       
              </>
            )}



{tooltipText === 'Vix' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbio     </></div>
                <div className='analisi2'>   <> avv. di tempo     </></div>
                </div>
                <div className='bordosopra'>
    Appena
                </div>
          

       
              </>
            )}


{tooltipText === 'prece' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> abl.sing     </></div>
                </div>
                <div className='bordosopra'>
                (prex, precis)
                </div>
          
Preghiera
       
              </>
            )}


{tooltipText === 'finita' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> participio perf. (ablativo singolare)     </></div>
                </div>
                <div className='bordosopra'>
                [fīnĭo], fīnis, finii, finitum, fīnīre
                </div>
          
Finita
       
              </>
            )}





{tooltipText === 'torpor' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>  nominativo. 3^decl     </></div>
                </div>
                <div className='bordosopra'>
                (torpŏr, torporis)
                </div>
          
Un torpore
       
              </>
            )}



{tooltipText === 'gravis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> agg. nominativo     </></div>
                </div>
                <div className='bordosopra'>
                (gravis, gravisgrave)
                </div>
          
Pesante
       
              </>
            )}




{tooltipText === 'occupat' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> indic. Pres. sing.    </></div>
                </div>
                <div className='bordosopra'>
                [occŭpo], occŭpas, occupavi, occupatum, occŭpāre
                </div>
          
Pervade
       
              </>
            )}



{tooltipText === 'artus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc.plur, neutro 4^decl   </></div>
                </div>
                <div className='bordosopra'>
                (artŭs, artūs)
                </div>
          
Membra
       
              </>
            )}





{tooltipText === 'mollia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> attributo     </></div>
                <div className='analisi2'>   <> agg. 2^ classe     </></div>
                </div>
                <div className='bordosopra'>
                (mollis, mollismolle)
                </div>
          
Morbido
       
              </>
            )}




{tooltipText === 'cinguntur' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> indicativo 3.pp. in forma passiva     </></div>
                </div>
                <div className='bordosopra'>
                [cingo], cingis, cinxi, cinctum, cingĕre
                </div>
          
Si fascia
       
              </>
            )}




{tooltipText === 'tenui' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> dativo retto da cinguntur  </></div>
                </div>
                <div className='bordosopra'>
                [tenuis], tenuis, tenue
                </div>
          
Sottile
       
              </>
            )}

        


{tooltipText === 'praecordia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom. pl. Neutro.     </></div>
                </div>
                <div className='bordosopra'>
                (praecordia, praecordiōrum)
                </div>
          
Petto
       
              </>
            )}


{tooltipText === 'libro' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sost. 2^decl     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
ForzeRIVEDEREEEE
       
              </>
            )}



{tooltipText === 'in frondem' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc.sing. compl di stato in luogo figurato.     </></div>
                </div>
                <div className='bordosopra'>
                (frons, frondis)
                </div>
          
In fogliame
       
              </>
            )}



{tooltipText === 'crines' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom.pl sogg     </></div>
                </div>
                <div className='bordosopra'>
                (crīnis, crinis)
                </div>
          
Capelli
       
              </>
            )}



{tooltipText === 'in ramos' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc.pl. compl di stato in luogo figurato.     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
In rami
       
              </>
            )}



{tooltipText === 'brachia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom.pl neutro    </></div>
                </div>
                <div className='bordosopra'>
                (brachium], brachii)
                </div>
          
Braccia
       
              </>
            )}




{tooltipText === 'crescunt' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> ind.pres.3pp.    </></div>
                </div>
                <div className='bordosopra'>
                [cresco], crescis, crevi, cretum, crescĕre
                </div>
          
Crescono
       
              </>
            )}





{tooltipText === 'pes' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> sogg di haeret, nom. sing.    </></div>
                </div>
                <div className='bordosopra'>
            (pes,is)
                </div>
          
Piede
       
              </>
            )}




{tooltipText === 'modo' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
ForzeRIVEDEREEE
       
              </>
            )}


{tooltipText === 'tam' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbio     </></div>
                <div className='analisi2'>   <> avverbio   </></div>
                </div>
                <div className='bordosopra'>
   Tanto
                </div>
          

       
              </>
            )}



{tooltipText === 'velox' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> aggettivo     </></div>
                <div className='analisi2'>   <> agg, attrib di pes,    </></div>
                </div>
                <div className='bordosopra'>
                [vēlox], vēlox, vēlox
                </div>
          
Veloce
       
              </>
            )}




{tooltipText === 'pigris' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> aggettivo     </></div>
                <div className='analisi2'>   <> dat.pl. attrib.di radicibus     </></div>
                </div>
                <div className='bordosopra'>
                [piger], pigră, pigrum
                </div>
          
Pigre
       
              </>
            )}





{tooltipText === 'radicibus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>dat.pl.  </></div>
                </div>
                <div className='bordosopra'>
                (rādix, radicis)

                </div>
          
In radici
       
              </>
            )}


{tooltipText === 'haeret' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> ind.pres. 3ps.     </></div>
                </div>
                <div className='bordosopra'>
                [haerĕo], haeres, haesi, haesum, haerēre
                </div>
          
Fissa
       
              </>
            )}




{tooltipText === 'ora' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc.pl. neutro    </></div>
                </div>
                <div className='bordosopra'>
              (ŏs, ossis)
                </div>
          
Volto
       
              </>
            )}


{tooltipText === 'cacumen' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom. sing.     </></div>
                </div>
                <div className='bordosopra'>
               (căcūmĕn, cacuminis)
                </div>
          
Cima
       
              </>
            )}


{tooltipText === 'habet' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'remanet' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> ind.pres.3ps. </></div>
                </div>
                <div className='bordosopra'>
                [rĕmănĕo], rĕmănes, remansi, remansum, rĕmănēre
       
                </div>
          
Rimane
       
              </>
            )}



{tooltipText === 'nitor' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom, soggetto    </></div>
                </div>
                <div className='bordosopra'>
                (nĭtŏr, nitoris)
                </div>
          
Splendore
       
              </>
            )}




{tooltipText === 'unus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> aggettivo     </></div>
                <div className='analisi2'>   <> attributo    </></div>
                </div>
                <div className='bordosopra'>
                [unus], una, unum
                </div>
          
Solo       
              </>
            )}



{tooltipText === 'in illa' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbio - compl.stato in luogo figurato     </></div>
                <div className='analisi2'>   <> Abl.sing.femm.     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
in quella
       
              </>
            )}




{tooltipText === 'Hanc' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> pronome dimostrativo     </></div>
                <div className='analisi2'>   <> acc.sing.femm, compl ogg.     </></div>
                </div>
                <div className='bordosopra'>
                [hic], haec, hoc
                                </div>
          
Questa
       
              </>
            )}



{tooltipText === 'quoque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbio     </></div>
                <div className='analisi2'>   <> avverbio    </></div>
                </div>
                <div className='bordosopra'>
  Anche
                </div>
          

       
              </>
            )}

{tooltipText === 'Phoebus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom.sing.      </></div>
                </div>
                <div className='bordosopra'>
                (Phoebus, Phoebi)
                </div>
          
Febo
       
              </>
            )}



{tooltipText === 'amat' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <>  ind.pres. 3ps     </></div>
                </div>
                <div className='bordosopra'>
                [ămo], ămas, amavi, amatum, ămāre
                </div>
          
Ama
       
              </>
            )}



{tooltipText === 'positaque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> part,perf. - ablativo singolare   </></div>
                </div>
                <div className='bordosopra'>
                [pōno], pōnis, posui, positum, pōnĕre
                </div>
          
Posata
       
              </>
            )}



{tooltipText === 'in stipite' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> compl.di stato in luogo     </></div>
                </div>
                <div className='bordosopra'>
                (stīpĕs, stipitis)

                </div>
          Sul tronco
       
              </>
            )}



{tooltipText === 'dextra' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> abl sing,femm    </></div>
                </div>
                <div className='bordosopra'>
                (dextră, dextrae)
                </div>
          
Destra
              </>
            )}


{tooltipText === 'sentit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> ind.3ps.    </></div>
                </div>
                <div className='bordosopra'>
                [sentĭo], sentis, sensi, sensum, sentīre 
                </div>
          
Sente
       
              </>
            )}


{tooltipText === 'adhuc' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbio     </></div>
                <div className='analisi2'>   <> avverbio   </></div>
                </div>
                <div className='bordosopra'>
      Ancora
                </div>
          

       
              </>
            )}



{tooltipText === 'trepidare' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> infinito  </></div>
                </div>
                <div className='bordosopra'>
                [trĕpĭdo], trĕpĭdas, trepidavi, trepidatum, trĕpĭdāre 
                </div>
          Trepidare

       
              </>
            )}


{tooltipText === 'novo' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> aggettivo     </></div>
                <div className='analisi2'>   <> attributo    </></div>
                </div>
                <div className='bordosopra'>
                [novus], novă, novum
                </div>
          
Nuovo
       
              </>
            )}



{tooltipText === 'sub cortice' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'pectus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'complexusque' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'suis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'ramos' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. plu. Compl.ogg di complexus     </></div>
                </div>
                <div className='bordosopra'>
                (ramus, rami)
                </div>
          
Rami
       
              </>
            )}





{tooltipText === 'ut membra' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc pl. Riferito a ramos. Predicativo dell’oggetto     </></div>
                </div>
                <div className='bordosopra'>
                (membrum, membri)
                </div>
          
Membra
       
              </>
            )}


{tooltipText === 'lacertis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> abl. Plur     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'oscula' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'dat' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'ligno' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'refugit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}

{tooltipText === 'tamen' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'oscula' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'lignum' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'Cui' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> pronome     </></div>
                <div className='analisi2'>   <> forma di dat.sing, del pronome relativo qui.      </></div>
                </div>
                <div className='bordosopra'>
                [qui], quae, quod
                </div>
          
Quella
       
              </>
            )}


{tooltipText === 'deus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom sing     </></div>
                </div>
                <div className='bordosopra'>
                [deus], dei
                </div>
          
Il dio
       
              </>
            )}




{tooltipText === 'at' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> congiunzione     </></div>
                <div className='analisi2'>   <> cong avversativa     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Dal
       
              </>
            )}



{tooltipText === 'quoniam' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> congiuntivo     </></div>
                <div className='analisi2'>   <> cong subordinante causale     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Dal momento che
       
              </>
            )}



{tooltipText === 'coniunx' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nominativo sing.    </></div>
                </div>
                <div className='bordosopra'>
                (coniunx, coniugis)
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'mea' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> attributo     </></div>
                </div>
                <div className='bordosopra'>
                mĕum  [meum], mei
                </div>
          
Mia       
              </>
            )}


{tooltipText === 'non' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbio     </></div>
                <div className='analisi2'>   <> avverbio    </></div>
                </div>
                <div className='bordosopra'>
non                </div>
          

       
              </>
            )}



{tooltipText === 'potes' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> Ind. pres 2ps     </></div>
                </div>
                <div className='bordosopra'>
                [possum], potes, potui, posse
                </div>
          
Puoi
       
              </>
            )}


{tooltipText === 'esse' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> infinito presente     </></div>
                </div>
                <div className='bordosopra'>
                [sum], es, fui, esse
                </div>
          
Essere
       
              </>
            )}



{tooltipText === 'arbor' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom a funzione predicativa    </></div>
                </div>
                <div className='bordosopra'>
                (arbŏr, arboris)
                </div>
          
Albero
       
              </>
            )}




{tooltipText === 'eris' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> fut 2ps     </></div>
                </div>
                <div className='bordosopra'>
                [sum], es, fui, esse
                </div>
          
Sarai       
              </>
            )}



{tooltipText === 'certe' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbo     </></div>
                <div className='analisi2'>   <> avverbo    </></div>
                </div>
                <div className='bordosopra'>
  Certamente
                </div>
          

       
              </>
            )}





{tooltipText === 'dixit' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo   </></div>
                <div className='analisi2'>   <> perfetto, 3 p.sing.    </></div>
                </div>
                <div className='bordosopra'>
                [dīco], dīcis, dixi, dictum, dīcĕre

                </div>
          
Disse
       
              </>
            )}



{tooltipText === 'mea' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'semper' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> avverbio     </></div>
                <div className='analisi2'>   <> avverbio   </></div>
                </div>
                <div className='bordosopra'>
Sempre
                </div>
          

       
              </>
            )}



{tooltipText === 'habebunt' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> fut. 3pp.     </></div>
                </div>
                <div className='bordosopra'>
                [hăbĕo], hăbes, habui, habitum, hăbēre
                </div>
          
Avranno
       
              </>
            )}



{tooltipText === 'te' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> pronome     </></div>
                <div className='analisi2'>   <> compl.ogg. di habebunt. Acc sing     </></div>
                </div>
                <div className='bordosopra'>
                [tuus], tua, tuum
                </div>
          
Tuo
       
              </>
            )}


{tooltipText === 'coma' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <>  nom,sing.      </></div>
                </div>
                <div className='bordosopra'>
                (comă, comae)
                </div>
          
Chioma
       
              </>
            )}


{tooltipText === 'te' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. compl.ogg.     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Te
       
              </>
            )}





{tooltipText === 'citharae' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom plur poetico     </></div>
                </div>
                <div className='bordosopra'>
                (cithară, citharae)
                </div>
          
Cetra
       
              </>
            )}




{tooltipText === 'nostrae' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> pronome     </></div>
                <div className='analisi2'>   <> pronome possesivo     </></div>
                </div>
                <div className='bordosopra'>
                [noster], nostra, nostrum
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'laure' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Nostro
       
              </>
            )}



{tooltipText === 'pharetrae' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'tu' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'ducibus' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> dat plur.   </></div>
                </div>
                <div className='bordosopra'>
                (dux, ducis) 
                </div>
          
Ai condottieri       
              </>
            )}


{tooltipText === 'Latiis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> aggettivo     </></div>
                <div className='analisi2'>   <> dat plur.    </></div>
                </div>
                <div className='bordosopra'>
                [Latius], Latiă, Latium
                </div>
          
Ai latini
       
              </>
            )}



{tooltipText === 'aderis' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <> fut. 2ps.     </></div>
                </div>
                <div className='bordosopra'>
                [ădĕo], ădis, adii, aditum, ădire
                </div>
          
Starai vicino
              </>
            )}



{tooltipText === 'cum' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> congiunzione     </></div>
                <div className='analisi2'>   <> cong che introduce una temporale     </></div>
                </div>
                <div className='bordosopra'>
Quando
                </div>
          

       
              </>
            )}


{tooltipText === 'laeta' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> abl. sing. femm.    </></div>
                </div>
                <div className='bordosopra'>
                laetus  [laetus], laeti
                </div>
          
Lieta
       
              </>
            )}


{tooltipText === 'triumphum' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc sing, att di canet     </></div>
                </div>
                <div className='bordosopra'>
                (triumphus, triumphi)
                </div>
          
Il trionfo
       
              </>
            )}



{tooltipText === 'vox' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> nom. sing    </></div>
                </div>
                <div className='bordosopra'>
                (vox, vocis)
                </div>
          
Voce
       
              </>
            )}


{tooltipText === 'canet' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> verbo     </></div>
                <div className='analisi2'>   <>  fut, 3ps     </></div>
                </div>
                <div className='bordosopra'>
                [căno], cănis, cecini, cantum, cănĕre
                </div>
          
Canterà       
              </>
            )}



{tooltipText === 'et' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> congiunzione     </></div>
                <div className='analisi2'>   <> congiunzione coordinante    </></div>
                </div>
                <div className='bordosopra'>
e
                </div>
          

       
              </>
            )}




{tooltipText === 'visent' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}



{tooltipText === 'longas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}




{tooltipText === 'Capitolia' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}


{tooltipText === 'pompas' && (
              <>
              <div className='container2'>
                <div className='analisi'>   <> sostantivo     </></div>
                <div className='analisi2'>   <> acc. sing. Compl.ogg di perde     </></div>
                </div>
                <div className='bordosopra'>
       (vis, roboris) 
                </div>
          
Forze
       
              </>
            )}






          </div>
        )}
      </div>

     
    </div>
    <div className='bottone'>

      <a href="/analisi">
        <button>Vai ad Analisi</button>
      </a>
    </div> 
     </div>
  );
};

export default Hero;
