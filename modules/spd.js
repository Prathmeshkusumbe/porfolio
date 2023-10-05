export function spd(data){
  const struc = data.map(function(prod){
    return(`
    <div class="col-30">
      <div class="s-p-b">
        <div class="s-p-b-inner">
          <div class="spd-top">
            <span><img src=""></span>
            <span><div class="title">${prod.name}</div>
            <div class="url">${prod.url}</div></span>
          </div>
          <div class="bottom d-flex a-i-f-e">
            <div>Teach Stack: <span>${prod.tech_stact}</span></div>
          </div>
        </div>
      </div>
    </div>`);
  }).join('');
  return(`<div class="container">
    <div class="d-flex f-w-w g-20">
      ${struc}
    </div>
  </div>`);
}