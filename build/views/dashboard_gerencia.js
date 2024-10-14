
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <div class="row align-items-center mb-3">
                    <div class="col-md-6 d-flex align-items-center">
                        <img src="img/favicon.png" class="rounded me-3" width="100px" height="100px">
                    <div>
                        <h1 style="font-size:280%" class="text-right negrita text-danger mb-0">Purificadora Santa Clara</h1>
                        <h2>Gestión Administrativa</h2>
                    </div>
                </div>
            <br>
            <br>
            <br>
            <div class="col-md-6 text-end">
                <button class="btn btn-primary me-2">Botón 1</button>
                <button class="btn btn-secondary me-2" id="btnViewEmpleados">Empleados</button>
                <button class="btn btn-info" id="btnViewClientes">Clientes</button>
            </div>
            <div class="row">
            <div class="col-md-6">
                <h3 class="text-center">Report. Ventas</h3>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead class="bg-naranja text-white">
                            <tr>
                                <th>Columna 1</th>
                                <th>Columna 2</th>
                                <th>Columna 3</th>
                            </tr>
                        </thead>
                        <tbody id="tblVentas">
                            <!-- Aquí irán los datos de ventas -->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-6">
                <h3 class="text-center">Report. Prod</h3>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead class="bg-naranja text-white">
                            <tr>
                                <th>Columna 1</th>
                                <th>Columna 2</th>
                                <th>Columna 3</th>
                            </tr>
                        </thead>
                        <tbody id="tblProd">
                            <!-- Aquí irán los datos de producción -->
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){
    let btnViewClientes = document.getElementById('btnViewClientes');
    btnViewClientes.addEventListener('click', () => {
        Navegar.clientes();
    })
};

function initView(){

    getView();
    addListeners();

};
