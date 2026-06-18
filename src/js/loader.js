const loader = document.getElementById('loader');

// export function showLoader() {
//   loader.classList.remove('hidden');
// }

// export function hideLoader() {
//   loader.classList.add('hidden');
// }

export function showLoader() {
  document.getElementById('loader')?.classList.remove('hidden');
}

export function hideLoader() {
  document.getElementById('loader')?.classList.add('hidden');
}
