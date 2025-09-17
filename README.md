Installation:

1. git clone https://github.com/l3oss123456/testBankBangkok.git
2. cd testBankBangkok
3. npm install / yarn install

Run the app:

1. yarn dev

Folder Structure:

src/
├─ assets
├─ features/
│ └─ todo/ # todo feature
│ ├─ components/ # components for todo's feature such as TodoItem
│ ├─ hooks/
│ ├─ pages/ # TodoListPage.tsx
│ ├─ services/
│ ├─ types/ # ITodo.ts
│ └─ logic/ # HOC: TodoListPageLogic.tsx
├─ App.tsx
├─ index.tsx
