
const QUESTIONS = [
  { q: "El Ferrari simboliza el éxito material que no garantiza plenitud.", a: true },
  { q: "Julian cambia tras una crisis de salud que lo hace replantear su vida.", a: true },
  { q: "El libro propone ignorar la disciplina para ser más libre.", a: false },
  { q: "Gestionar bien el tiempo es un principio central del mensaje.", a: true },
  { q: "Liderazgo de servicio implica centrarse solo en uno mismo.", a: false },
  { q: "La integridad es coherencia entre valores y acciones.", a: true },
  { q: "El propósito personal no tiene relación con el trabajo.", a: false },
  { q: "El equilibrio vida–trabajo mejora el desempeño profesional.", a: true },
  { q: "La compasión no tiene cabida en equipos de alto rendimiento.", a: false },
  { q: "Dominar la mente ayuda a dirigir hábitos y resultados.", a: true }
];

function renderQuiz(){
  const list = document.getElementById("quiz-list");
  list.innerHTML = "";
  QUESTIONS.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className = "quiz-item";
    li.innerHTML = `
      <p>${idx+1}. ${item.q}</p>
      <label><input type="radio" name="q${idx}" value="true"> Verdadero</label>
      <label style="margin-left:1rem"><input type="radio" name="q${idx}" value="false"> Falso</label>
      <div class="feedback" id="f${idx}" style="display:none;margin-top:.3rem"></div>
    `;
    list.appendChild(li);
  });
}
renderQuiz();

document.getElementById("grade").addEventListener("click", () => {
  let correct = 0;
  QUESTIONS.forEach((item, idx) => {
    const checked = document.querySelector(`input[name="q${idx}"]:checked`);
    const fb = document.getElementById(`f${idx}`);
    if(!checked){
      fb.style.display = "block";
      fb.textContent = "• Sin respuesta";
      fb.style.color = "#b45309";
      return;
    }
    const val = (checked.value === "true");
    const ok = (val === item.a);
    if(ok) correct++;
    fb.style.display = "block";
    fb.textContent = ok ? "• Correcto" : "• Incorrecto";
    fb.style.color = ok ? "#166534" : "#991b1b";
  });
  const pct = Math.round((correct / QUESTIONS.length) * 100);
  document.getElementById("result").textContent = `Resultado: ${correct}/${QUESTIONS.length} (${pct}%)`;
  document.getElementById("retry").style.display = "inline-block";
});

document.getElementById("retry").addEventListener("click", () => {
  renderQuiz();
  document.getElementById("result").textContent = "";
  document.getElementById("retry").style.display = "none";
});
