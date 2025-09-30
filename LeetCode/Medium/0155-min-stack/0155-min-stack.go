type MinStack struct {
	st  []int
	min []int
}

func Constructor() MinStack {
	return MinStack{
		st:  []int{},
		min: []int{},
	}
}

func (this *MinStack) Push(val int) {
	this.st = append(this.st, val)
    if len(this.min) > 0 {
        if val < this.min[len(this.min)-1] {
            this.min = append(this.min, val)
        } else {
            this.min = append(this.min, this.min[len(this.min)-1])
        }
    } else {
        this.min = append(this.min, val)
    }
}

func (this *MinStack) Pop() {
	if len(this.st) == 0 {
		fmt.Errorf("stack is empty")
	}
    this.st = this.st[:len(this.st)-1]
    this.min = this.min[:len(this.min)-1]
}

func (this *MinStack) Top() int {
	val := this.st[len(this.st)-1]
	return val
}

func (this *MinStack) GetMin() int {
	if len(this.min) == 0 {
		fmt.Errorf("stack is empty")
	}
	return this.min[len(this.min)-1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */