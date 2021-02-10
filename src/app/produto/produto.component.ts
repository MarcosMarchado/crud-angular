import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProdutoService } from '../produto.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  products: Product[]
  term: string = ""
  edit: boolean = false
  search: boolean = false
  product: Product = {
    id: null,
    name: '',
    price: null
  }

  constructor(
    private service: ProdutoService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  resetInput() {
    this.product = {
      name: "",
      price: null
    }
    this.term = ""
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.products = response
      setTimeout(() => {
        this.spinner.hide()
      }, 1500)
      this.resetInput()
    })
  }

  delete(id) {
    this.service.delete(id).subscribe(response => {
      console.log("Produto deletado com Sucesso")
      this.getAll()
      this.toastr.warning("Produto deletado", "", {
        timeOut: 3000,
        closeButton: true,
        progressBar: true
      })
    })
  }

  create() {
    this.service.create(this.product).subscribe(response => {
      console.log("Produto criado com Sucesso")
      this.getAll()
      this.spinner.show()
      this.toastr.success('Produto Cadastrado com Sucesso', '',
        {
          timeOut: 6000,
          closeButton: true,
          progressBar: true
        }
      )
    })
  }

  put() {
    this.service.put(this.product).subscribe(response => {
      this.getAll()
      this.edit = false
      this.toastr.info('Produto Alterado com Sucesso!', '', {
        timeOut: 6000,
        closeButton: true,
        progressBar: true
      })
    })
  }
  getAtr(produto) {
    this.product = produto
    this.edit = true
    this.search = false
  }

  filter() {
    this.search = true
    this.service.filter(this.term).subscribe(response => {
      this.products = response
    })
  }

  cancel() {
    this.edit = false
    this.search = false
    this.getAll()
    this.resetInput()
  }


}
