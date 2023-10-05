export function spd(data){
  const struc = data.map(function(prod){
    return(`
   <div class="col-30">
      <div class="s-p-b">
        <a href="${prod.url}" target="_blank"><div class="s-p-b-inner">
          <div class="spd-top">
            <span><img src=""></span>
            <span><div class="title">${prod.name}</div>
            <div class="url">${prod.url}</div></span>
          </div>
          <div class="bottom d-flex a-i-f-e">
            <div>Teach Stack: <span>${prod.tech_stact}</span></div>
          </div>
        </div><span class="redirect"><svg data-testid="geist-icon" height="16" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: #000;"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z" fill="currentColor"></path></svg></span></a>
      </div>
    </div>`);
  }).join('');
  return(`<div class="container">
    <div class="d-flex f-w-w g-20">
      ${struc}
    </div>
  </div>`);
}