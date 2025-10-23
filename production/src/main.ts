import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  interface ProductionOrder {
  key?: string;
  value?: string;
  label: string;
  description?: string;
  quantity?: number;
  qty?: number;
  productImage?: string;
}

interface StopType {
  value: string;
  label: string;
}

// Função assíncrona imediatamente invocada
(async function (): Promise<void> {
  const po: ProductionOrder[] = await fetch('production-orders.json').then((r) =>
    r.json()
  );
  const stops: StopType[] = await fetch('stop-types.json').then((r) => r.json());

  // Seletores DOM
  const poList = document.getElementById('po-list') as HTMLUListElement;
  const orderDetails = document.getElementById('order-details') as HTMLElement;
  const osNumber = document.getElementById('os-number') as HTMLElement;
  const machinesEl = document.getElementById('machines') as HTMLElement;
  const stopModal = document.getElementById('stop-modal') as HTMLElement;
  const stopSelect = document.getElementById('stop-type-select') as HTMLSelectElement;
  const stopDesc = document.getElementById('stop-desc') as HTMLTextAreaElement;

  let current: ProductionOrder = po[0];

  /** Renderiza lista de ordens */
  function renderPOList(): void {
    poList.innerHTML = '';
    po.forEach((p) => {
      const li = document.createElement('li');
      li.className = 'po-item';
      li.innerHTML = `
        <div class="po-thumb">
          <img src="${p.productImage || 'assets/Velora.png'}" 
               style="width:100%;height:100%;object-fit:cover">
        </div>
        <div class="po-meta">
          <div class="po-label">${p.label}</div>
          <div class="po-desc">${p.description || ''}</div>
        </div>
        <div><strong>${p.quantity ?? p.qty ?? ''}</strong></div>
      `;
      li.addEventListener('click', () => {
        current = p;
        renderCurrent();
      });
      poList.appendChild(li);
    });
  }

  /** Renderiza detalhes da ordem atual */
  function renderCurrent(): void {
    osNumber.textContent = 'OS-' + (current.key || current.value || '0000');
    orderDetails.innerHTML = `
      <div class="detail-card">
        <h4>Produto</h4>
        <p><strong>${current.label || ''}</strong></p>
        <p>${current.description || ''}</p>
      </div>
      <div class="detail-card">
        <h4>Quantidade</h4>
        <p><strong>${current.quantity ?? current.qty ?? '—'}</strong></p>
        <h5>Tempo estimado</h5>
        <p>Produção iniciada a 27 minutos</p>
      </div>
    `;
  }

  /** Renderiza máquinas */
  function renderMachines(): void {
    machinesEl.innerHTML = '';
    for (let i = 1; i <= 4; i++) {
      const m = document.createElement('div');
      m.className = 'machine';
      m.innerHTML = `
        <div>Máquina ${i}</div>
        <div class="status">${i % 3 === 0 ? 'Parada' : 'Em funcionamento'}</div>
      `;
      machinesEl.appendChild(m);

      m.addEventListener('click', () => {
        stopSelect.innerHTML = '';
        stops.forEach((s) => {
          const opt = document.createElement('option');
          opt.value = s.value;
          opt.textContent = s.label;
          stopSelect.appendChild(opt);
        });
        stopModal.classList.remove('hidden');
      });
    }
  }

  // Botões principais
  document.getElementById('start-btn')?.addEventListener('click', () => {
    alert('Iniciando produção para ' + (current.label || '—'));
  });

  document.getElementById('pause-btn')?.addEventListener('click', () => {
    stopModal.classList.remove('hidden');
  });

  document.getElementById('finish-btn')?.addEventListener('click', () => {
    const ok = confirm('Finalizar produção?');
    if (ok) alert('Produção finalizada');
  });

  // Modal de parada
  document.getElementById('cancel-stop')?.addEventListener('click', () => {
    stopModal.classList.add('hidden');
    stopDesc.value = '';
  });

  document.getElementById('send-stop')?.addEventListener('click', () => {
    const type = stopSelect.value;
    const desc = stopDesc.value;
    if (!type) {
      alert('Selecione um tipo de parada');
      return;
    }
    alert('Parada registrada: ' + type + '\n' + desc);
    stopModal.classList.add('hidden');
    stopDesc.value = '';
  });

  // Inicialização
  renderPOList();
  renderCurrent();
  renderMachines();
})();
