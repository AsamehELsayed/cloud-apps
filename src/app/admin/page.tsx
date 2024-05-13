import { cookies } from "next/headers";
import AddArticleForm from "./AdminArticleForm";
import { verifyTokenForPage } from "@/utils/token";
import { redirect, useRouter } from "next/navigation";

const AdminPage = () => {
 
  const token = cookies().get("token")?.value as string || ""
  const user = verifyTokenForPage(token)
  if(!user?.isAdmin){
    redirect("/")
  }
  return (
    <div className="fix-height flex items-center justify-center px-5 lg:px-20">
      <div className="shadow p-4 bg-slate-800 rounded w-full">
        <h2 className="text-xl lg:text-2xl text-white font-semibold mb-4">
          Add New Article
        </h2>
        <AddArticleForm />

      </div>
    </div>
  )
}

export default AdminPage;