export class CustomValidators{
    static incompleteLotto() {
        return (control) => {
            let valid = true;
            const lottoNumbers = control.value.lottoNumbers;
            lottoNumbers.forEach(val => {
                if (val === null) {
                    valid = false;
                }
            });
            return (valid) ? null : {incompleteLotto: true}
        }
    }
}