# Hacktoberfest Friendly Project — Simple Todo API (Node.js)
Selamat! Ini proyek sederhana untuk Hacktoberfest — berisi **folder `starter/`** dengan kode *buggy* (6 bug) yang bisa diperbaiki oleh kontributor, dan **folder `solutions/`** yang menunjukkan perbaikan (jawaban).  
Format: Node.js + Express (tanpa database; data disimpan in-memory).

## Cara menjalankan (starter)
1. Buka terminal di folder `starter/`
2. `npm install`
3. `node app.js`
4. API berjalan di `http://localhost:3000`
   - `GET /todos` -> list todos
   - `POST /todos` -> tambah todo `{ "title": "..." }`
   - `PUT /todos/:id` -> update title
   - `DELETE /todos/:id` -> hapus todo

## Tujuan Proyek
- Beri issue & PR untuk tiap bug di `starter/`.
- Setiap PR harus memperbaiki **satu** bug, sertakan penjelasan singkat.
- File `BUGS.md` berisi daftar 6 bug yang sengaja dibuat dan petunjuk bagaimana mereproduksinya.

## Struktur
- `starter/` — kode bermasalah (untuk dikerjakan peserta)
- `solutions/` — kode sudah diperbaiki (panduan untuk maintainer)
- `BUGS.md` — deskripsi bug
- `CONTRIBUTING.md` — panduan kontribusi

Semoga membantu — selamat mengontribusi dan semoga banyak PR masuk! 🎉
