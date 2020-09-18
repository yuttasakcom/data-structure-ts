# Data Structure TS

## Table of Contents
- [Recursion](#Recursion)

## Recursion
```html
แนวทางการเขียนโปรแกรมแนวทางหนึ่ง ที่มีแนวคิดมาจากคณิตศาสตร์ ภาษาไทยเรียก "การทำซ้ำ"
โดยลักษณะ "การทำซ้ำ" จะเป็นการเรียก(call)ฟังก์ชั่นตัวเองให้ทำงานซ้ำอีกครั้งหนึ่ง
แต่ยังคงค้าง(suspend)การประมวลผลก่อนหน้าที่ยังไม่ได้คำนวณไว้ใน memory
เมื่อถึงจุดที่ฟังก์ชั่นคำนวณผลลัพธ์ได้แล้ว(Base Case)ก็จะส่งผลลัพธ์ย้อนกลับมาทำส่วนที่ค้างไว้ใน memory และทำการประมวลผลไปเรื่อยๆจนกว่าจะได้ผลลัพธ์ทั้งหมด
จะสังเกตุได้ว่า Recursion จะเริ่มด้วยข้อมูลที่มีขนาดใหญ่ และเมื่อเรียกตัวเอง ข้อมูลจะเล็กลงเรื่อยๆ มีลักษณะเหมือนตุ๊กตาหุ่นที่ซ้อนกันของญี่ปุ่น

ลักษณะของ Recursion ที่ดีควรมีคุณสมบัติ ดังนี้
1. มี Base Case อย่างน้อย 1 Base Case
2. making progress คือ recursive routine มีพฤติกรรมวิ่งเข้าหา Base Case เสมอ
3. Design rule แน่ใจ มั่นใจว่าค่าที่ส่งให้ recusion ถูกต้องแน่นอน
4. Compound interest rule คือ Recursive routine จะต้องไม่ทำ สิ่งที่เคยทำไปแล้ว

```

```js
const fac = n => {
  if (n === 0) return 1
  x = fac(n - 1);
  y = n * x;
  return y;
}

console.log(fac(3))
```

```js
const fib = x => {
  f1 = 1
  f2 = 1
  fN = 0

  for (let i=2; i <= x; i++) {
    fN = f1 + f2
    f2 = f1
    f1 = fN
  }

  return fN
}

console.log(fib(100))
```