import React from 'react'
import { AdminLayout } from '../layout/AdminLayout.tsx'
import { AdminRoutes } from '../routes/AdminRoutes.tsx'

export const AdminPage = () => {
  return (
    <AdminLayout>
      <AdminRoutes></AdminRoutes>
    </AdminLayout>
  )
}
