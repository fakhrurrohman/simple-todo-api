# BUGS (6 issues)

Berikut 6 bug yang sengaja dibuat di folder `starter/`. Masing-masing bug juga diberi angka untuk referensi PR.

1. **BUG-1 — Variable typo causing crash in GET /todos**
   - File: `starter/routes/todos.js`
   - Deskripsi: Variabel `todoList` dipanggil, tetapi modul mengekspor `todos`. Reproduksi: `GET /todos` -> server error.
   - Perbaikan: Gunakan nama yang konsisten.

2. **BUG-2 — Not awaiting async create causing empty response**
   - File: `starter/routes/todos.js`
   - Deskripsi: Saat `POST /todos`, fungsi asinkron tidak di-`await`, menyebabkan response sebelum data ditambahkan.
   - Perbaikan: `await` saat menambahkan item.

3. **BUG-3 — Server crash on invalid input (no validation)**
   - File: `starter/routes/todos.js`
   - Deskripsi: Jika body POST tidak memiliki `title`, server mencoba mengakses `.trim()` dan crash.
   - Perbaikan: Validasi input dan kirim 400 Bad Request.

4. **BUG-4 — Off-by-one delete bug**
   - File: `starter/data/todos.js`
   - Deskripsi: Fungsi `deleteTodo(id)` menghapus index `id` langsung tanpa mencari berdasarkan id sehingga salah item terhapus.
   - Perbaikan: Cari index berdasarkan `todo.id === id`.

5. **BUG-5 — Missing module export (module.exports forgotten)**
   - File: `starter/data/todos.js`
   - Deskripsi: Modul data tidak mengekspor fungsi yang diperlukan sehingga import gagal.
   - Perbaikan: Tambahkan `module.exports = { ... }`.

6. **BUG-6 — Wrong HTTP status codes (always 200)**
   - File: `starter/routes/todos.js`
   - Deskripsi: Endpoint selalu mengembalikan status 200 bahkan saat membuat resource (seharusnya 201) atau saat resource tidak ditemukan (seharusnya 404).
   - Perbaikan: Kembalikan status yang sesuai (201, 404, 400).

Silakan lihat folder `solutions/` untuk contoh perbaikan setelah mencoba sendiri.
