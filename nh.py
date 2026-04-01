import tkinter as tk
from tkinter import ttk, messagebox

dersler = []

def ders_ekle():
    try:
        ad = entry_ders.get()
        y1 = float(entry_y1.get())
        y2 = float(entry_y2.get())
        p1 = float(entry_p1.get())
        p2 = float(entry_p2.get())

        ortalama = (y1 + y2 + p1 + p2) / 4

        dersler.append((ad, y1, y2, p1, p2, ortalama))

        tree.insert("", "end", values=(ad, y1, y2, p1, p2, f"{ortalama:.2f}"))

        entry_ders.delete(0, tk.END)
        entry_y1.delete(0, tk.END)
        entry_y2.delete(0, tk.END)
        entry_p1.delete(0, tk.END)
        entry_p2.delete(0, tk.END)

    except:
        messagebox.showerror("Hata", "Tüm alanları doğru doldur!")

def sene_sonu_hesapla():
    if not dersler:
        messagebox.showwarning("Uyarı", "Hiç ders yok!")
        return
    
    toplam = sum(d[5] for d in dersler)
    ort = toplam / len(dersler)

    messagebox.showinfo("Sonuç", f"Sene Sonu Ortalaması: {ort:.2f}")

root = tk.Tk()
root.title("Not Sistemi (Eşit Ağırlık)")
root.geometry("900x900")

notebook = ttk.Notebook(root)
notebook.pack(fill="both", expand=True)

frame1 = tk.Frame(notebook)
notebook.add(frame1, text="Not Sistemi")

tk.Label(frame1, text="Ders Adı").pack()
entry_ders = tk.Entry(frame1)
entry_ders.pack()

tk.Label(frame1, text="Yazılı 1").pack()
entry_y1 = tk.Entry(frame1)
entry_y1.pack()

tk.Label(frame1, text="Yazılı 2").pack()
entry_y2 = tk.Entry(frame1)
entry_y2.pack()

tk.Label(frame1, text="Performans 1").pack()
entry_p1 = tk.Entry(frame1)
entry_p1.pack()

tk.Label(frame1, text="Performans 2").pack()
entry_p2 = tk.Entry(frame1)
entry_p2.pack()

tk.Button(frame1, text="Ders Ekle", command=ders_ekle).pack(pady=10)

columns = ("Ders", "Yazılı 1", "Yazılı 2", "Perf 1", "Perf 2", "Ortalama")
tree = ttk.Treeview(frame1, columns=columns, show="headings")

for col in columns:
    tree.heading(col, text=col)

tree.pack(pady=10, fill="both", expand=True)

tk.Button(frame1, text="Sene Sonu Hesapla", command=sene_sonu_hesapla).pack(pady=10)

root.mainloop()