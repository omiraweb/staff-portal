# Staff portal for businesses

This staff portal can help businesses manage staff. Exployees can apply for vacations and view salary. HR can manage employees.

## Implementation checklist

This checklist tracks all development tasks for the Staff Portal application.

### ✅ Authentication & Authorization

- [x] Setup Supabase Auth (email/password flow)
- [x] Create login page
- [x] Create signup page
- [x] Create forgot password page
- [x] Create reset password page
- [x] Implement email verification flow
- [x] Implement custom JWT role injection (`custom_access_token_hook`)
- [x] Middleware for role-based redirects:
  - [x] Employee → `/dashboard`
  - [x] HR → `/hr`
  - [x] Admin → `/admin`

### 👤 Admin Panel

- [x] Create admin dashboard layout
- [ ] Add KPI cards (users, HRs, employees, leave requests)
- [ ] Build user management table
  - [ ] List all users
  - [ ] Search users
  - [ ] Filter users
  - [ ] Pagination
- [ ] User details page with role assignment
- [ ] Reports & exports
  - [ ] Export users
  - [ ] Export salaries
  - [ ] Export leave requests
- [ ] Settings pages
  - [ ] Departments CRUD
  - [ ] Leave types CRUD
  - [ ] System configs
- [ ] Logs & audit trail page

### 👨‍💼 HR Panel

- [ ] Create HR dashboard layout
- [ ] Employee profiles list
  - [ ] View employee info
  - [ ] Edit employee info
- [ ] Manage leave requests
  - [ ] Approve requests
  - [ ] Reject requests
- [ ] Reports
  - [ ] Basic employee stats
  - [ ] Leave stats

### 👩‍💻 Employee Panel

- [ ] Create employee dashboard layout
- [ ] Profile page
  - [ ] View profile
  - [ ] Update profile
- [ ] Salaries page
- [ ] Submit leave request form
- [ ] View leave request status

### ⚙️ Infrastructure

- [ ] Setup `.env` and environment variables
- [ ] Setup CI/CD pipeline
- [ ] Add environment warnings
- [ ] Create reusable UI components (Navbar, Sidebar, Buttons, Cards)

### 🎨 UI/UX

- [ ] Tailwind theming (dark/light mode)
- [ ] Consistent component styles
- [ ] Responsive layouts

### 🧪 QA & Testing

- [ ] Unit tests for authentication
- [ ] Unit tests for role-based redirects
- [ ] Integration tests for admin workflows
- [ ] Acceptance testing across roles
