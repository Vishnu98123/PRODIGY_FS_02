
fetch('http://localhost:5000/api/employees')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('employee-list');
    data.forEach(emp => {
      const div = document.createElement('div');
      div.textContent = `${emp.name} - ${emp.position}`;
      list.appendChild(div);
    });
  });
