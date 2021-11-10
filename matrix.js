class Matrix{
    constructor (h, w){
        this._value=[];
        this._height=h;
        this._width=w;
        for (let i=0; i<h; i++){
            this._value[i]=[];
            for (let j=0; j<w; j++){
                this._value[i][j]=j+i*w+1;
            }
        }

    }

    print(){
        console.log('------------')
        for (let i=0; i<this.height;i++){
           console.log(`[${this._value[i].toString()}]`);
        }
        console.log('------------')
    }

    getValue(str,col){
        return this._value[str][col];
    }

    setValue(str,col,value){
        this._value[str][col]=value;
    }

    get height(){return this._height};
    get width(){return this._width};

    sort(col){
        col = col ?? 0;
        if (col<0) col=0;
        if (col>=this.width) col=this.width-1;
        for (let i=0;i<this.height-1;i++){
            for (let j=i+1;j<this.height;j++){
                if (this._value[j][col]<this._value[i][col]){
                    let tmp=this._value[j];
                    this._value[j]=this._value[i];
                    this._value[i]=tmp;
                }
            }
        }

    }

    mul(other){
        if (this.width!==other.height){
            throw new Error('Матрицы несовместимы')
        }

        const res=new Matrix(this.height, other.width);

        for (let i=0; i<this.height; i++){
            for(let j=0; j<other.width; j++){
                let cellValue=0;
                for(let r=0; r<this.width; r++){
                    cellValue+=(this.getValue(i,r)*other.getValue(r,j));
                }
                res.setValue(i, j, cellValue);
            }
        }
        return res;
    }

    sum(other){
        if (this.width!==other.width || this.height!==other.height){
            throw new Error('Матрицы несовместимы')
        } 

        const res=new Matrix(this.height, this.width);

        for (let i=0; i<this.height; i++){
            for(let j=0; j<this.width; j++){
                res.setValue(i, j, this.getValue(i,j)+other.getValue(i,j));
            }
        }
        return res;

    }
}

const m=new Matrix(3, 4);
const m1=new Matrix(2, 3);
const m2=new Matrix(3, 2);
const m3=new Matrix(2, 3);
m2.setValue(0,0,7);
m2.setValue(0,1,8);
m2.setValue(1,0,9);
m2.setValue(1,1,1);
m2.setValue(2,0,2);
m2.setValue(2,1,3);
const resM = m1.sum(m3);

m1.print();
m2.print();
resM.print();


    