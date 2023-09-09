import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { RegisterSchema, RegisterSchemaType } from 'schema'

export const RegisterTemplate = () => {
    const { handleSubmit, register, formState: { errors }, } = useForm<RegisterSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(RegisterSchema)
    })

    const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
       try {
        console.log({ values })
        await axios({
            method: 'POST',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data: values,
            headers: {
              TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjAxLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjc0NTYwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA2ODkzMjAwfQ.-axBsmkeW5i-ufzRXjqOhPEUumPXCQLTot5UjBRmtdQ',
            }
        })
        toast.success('Đăng kí thành công')
       } catch (err) {
        console.log('error', err)
        toast.error(err?.response?.data?.content)
       }
    }

    return (
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-600 text-20">Đăng kí</h2>
            <div className="mt-16">
                <label htmlFor="taiKhoan">Tài khoản</label>
                <input placeholder="Tài Khoản" id="taiKhoan" type="text" className="mt-8 p-8 w-full rounded-6 bg-[#333]" {...register('taiKhoan')} />
                {
                    errors?.taiKhoan && <p className="text-red-500 text-12 mt-1">{errors?.taiKhoan.message}</p>
                }
            </div>
            <div className="mt-16">
                <label htmlFor="matKhau">Mật Khẩu</label>
                <input placeholder="Mật Khẩu" id="matKhau" type="password" className="mt-8 p-8 w-full rounded-6 bg-[#333]" {...register('matKhau')} />
                {
                    errors?.matKhau && <p className="text-red-500 text-12 mt-1">{errors?.matKhau.message}</p>
                }
            </div>
            <div className="mt-16">
                <label htmlFor="hoTen">Họ và Tên</label>
                <input placeholder="Họ và Tên" id="hoTen" type="text" className="mt-8 p-8 w-full rounded-6 bg-[#333]" {...register('hoTen')} />
                {
                    errors?.hoTen && <p className="text-red-500 text-12 mt-1">{errors?.hoTen.message}</p>
                }
            </div>
            <div className="mt-16">
                <label htmlFor="email">Email</label>
                <input placeholder="Email" id="email" type="text" className="mt-8 p-8 w-full rounded-6 bg-[#333]" {...register('email')} />
                {
                    errors?.email && <p className="text-red-500 text-12 mt-1">{errors?.email.message}</p>
                }
            </div>
            <div className="mt-16">
                <label htmlFor="soDt">Số Điện Thoại</label>
                <input placeholder="Số Điện Thoại" id="soDt" type="number" className="mt-8 p-8 w-full rounded-6 bg-[#333]" {...register('soDt')} />
                {
                    errors?.soDt && <p className="text-red-500 text-12 mt-1">{errors?.soDt.message}</p>
                }
            </div>
            <div className="mt-16">
                <label htmlFor="maNhom">Mã Nhóm</label>
                <input placeholder="Mã Nhóm" id="maNhom" type="number" className="mt-8 p-8 w-full rounded-6 bg-[#333]" {...register('maNhom')} />
                {
                    errors?.maNhom && <p className="text-red-500 text-12 mt-1">{errors?.maNhom.message}</p>
                }
            </div>
            <button className="w-full p-16 bg-red-500 text-white mt-20 rounded-10">Đăng Kí</button>
        </form>

    )
}
