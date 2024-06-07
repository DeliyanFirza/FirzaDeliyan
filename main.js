const resetButton = document.getElementById('reset');
let nomorUrut = 1;

        function simpanNilai() {
            const nim = document.getElementById('nim').value;
            const nama = document.getElementById('nama').value;
            const presensiTeori = parseFloat(document.getElementById('presensi-teori').value);
            const tugasTeori = parseFloat(document.getElementById('tugas-teori').value);
            const utsTeori = parseFloat(document.getElementById('uts-teori').value);
            const uasTeori = parseFloat(document.getElementById('uas-teori').value);
            const presensiPraktek = parseFloat(document.getElementById('presensi-praktek').value);
            const tugasPraktek = parseFloat(document.getElementById('tugas-praktek').value);
            const utsPraktek = parseFloat(document.getElementById('uts-praktek').value);
            const uasPraktek = parseFloat(document.getElementById('uas-praktek').value);

            if (!nim || !nama || isNaN(presensiTeori) || isNaN(tugasTeori) || isNaN(utsTeori) || isNaN(uasTeori) ||
                isNaN(presensiPraktek) || isNaN(tugasPraktek) || isNaN(utsPraktek) || isNaN(uasPraktek)) {
                alert('Harap isi semua kolom dengan benar.');
                return;
            }
        
            const presensi = ( presensiTeori + presensiPraktek )/2 *0.1 ;
            const tugas = ( tugasTeori + tugasPraktek) /2 *0.3 ;
            const uts = (utsTeori + utsPraktek ) /2 *0.3 ;
            const uas = ( uasTeori + uasPraktek ) /2 *0.3 ;            
            const nilaiAkhir =  (presensi + tugas + uts + uas) ;
            const grade = hitungGrade(nilaiAkhir);

            const tableBody = document.querySelector('#nilaiTable tbody');
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${nomorUrut++}</td>
                <td>${nim}</td>
                <td>${nama}</td>
                <td>${presensi}</td>
                <td>${tugas}</td>
                <td>${uts}</td>
                <td>${uas}</td>
                <td>${nilaiAkhir.toFixed(2)}</td>
                <td>${grade}</td>
            `;
            tableBody.appendChild(row);
            resetForm();
        }
        

        function batalForm() {
            document.getElementById('nim').value = '';
            document.getElementById('nama').value = '';
            document.getElementById('presensi-teori').value = '';
            document.getElementById('tugas-teori').value = '';
            document.getElementById('uts-teori').value = '';
            document.getElementById('uas-teori').value = '';
            document.getElementById('presensi-praktek').value = '';
            document.getElementById('tugas-praktek').value = '';
            document.getElementById('uts-praktek').value = '';
            document.getElementById('uas-praktek').value = '';
        }

        function hitungGrade(nilaiAkhir) {
            if (nilaiAkhir >= 80) return 'A';
            if (nilaiAkhir >= 70) return 'B';
            if (nilaiAkhir >= 60) return 'C';
            if (nilaiAkhir >= 50) return 'D';
            return 'E';
        }
        
        document.getElementById('reset').addEventListener('click',function(){
        nilaiList=[];
        updateTable();
        no= 1;

        });

        function updateTable() {
            const nilaiTableBody = document.getElementById('resetForm');
            resetForm.innerHTML = '';
            nilaiList.forEach(nilai => {
                const row = document.createElement('tr');
                Object.values(nilai).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                nilaiTableBody.appendChild(row);
            });
          }
        

         