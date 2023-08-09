import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { deleteProduct, readMember, readProduct } from "../../api/adminAPI"
import { Link } from "react-router-dom"

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    modDate: '',
    mno: 0,
    email: '',
    nickname: '',
    roleName: '',
    procatename: '',
    delFlag: false,
    fname: ''
}

const ProductReadComponent = () => {

    const [product, setProduct] = useState(initState)
    const {pno} = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        readProduct(pno).then(data => {

            console.log(data)
            setProduct(data)
            console.log(product)

        })

    }, [pno, product.mno])

    // 상품 삭제 확인 모달
    const handleClickDelete = () => {

      console.log("click modal")
      alert(product.pno + "번 게시글이 삭제되었습니다.")
      deleteProduct(product.pno)

      navigate('/products/list')      

    }


    return (  
        <div>
            <table className="border-2">
                <tr>
                    <th>No</th>
                    <td>{product.pno}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{product.pname}</td>
                </tr>
                <tr>
                    <th>Desc</th>
                    <td>{product.pdesc}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{product.price}</td>
                </tr>
                <tr><Link to={`/member/read/${product.mno}`}>
                    <th>Email</th>
                    <td>{product.email}</td>
                </Link></tr>
                <tr>
                    <th>Nickname</th>
                    <td>{product.nickname}</td>
                </tr>
                <tr>
                    <th>CateName</th>
                    <td>{product.procatename}</td>
                </tr>
                <tr>
                    <th>Date</th>
                    <td>{product.modDate}</td>
                </tr>
            </table>
            <div onClick={handleClickDelete}>
                <button className="bg-red-500 text-white">Delete</button>
            </div>

            {/* <button onClick={moveList}>List</button> */}

        </div>
    );
}
 
export default ProductReadComponent;