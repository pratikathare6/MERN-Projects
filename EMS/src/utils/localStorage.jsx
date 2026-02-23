
const admin = [

    {
    "id": 1,
    "email": "admin.admin@company.com",
    "password": "123"
  },
]

const employees = [

    [
  {
    "id": 1,
    "email": "john.doe@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Complete project report",
        "description": "Finalize Q1 financial report for management review",
        "date": "2026-02-25",
        "category": "Work"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team meeting",
        "description": "Weekly sync with development team",
        "date": "2026-02-24",
        "category": "Meeting"
      }
    ]
  },
  {
    "id": 2,
    "email": "user.user@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design landing page",
        "description": "Create responsive landing page for new product",
        "date": "2026-02-28",
        "category": "Design"
      }
    ]
  },
  {
    "id": 3,
    "email": "mike.wilson@company.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve authentication error in production",
        "date": "2026-02-20",
        "category": "Bugfix"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "API documentation",
        "description": "Update API docs for new endpoints",
        "date": "2026-02-27",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 4,
    "email": "sarah.brown@company.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Client presentation",
        "description": "Prepare slides for client demo",
        "date": "2026-02-26",
        "category": "Presentation"
      }
    ]
  },
  {
    "id": 5,
    "email": "david.johnson@company.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Database optimization",
        "description": "Add indexes to improve query performance",
        "date": "2026-02-22",
        "category": "Database"
      }
    ]
  }
]

]


export const setlocalstorege = ()=>{

    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getlocalstorege = ()=>{

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))



    

}
