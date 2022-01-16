import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
  TextareaAutosize,
} from "@mui/material";
import { Landpage } from "components/Layout/landpage";
import { Title } from "components/Title";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "../styles/pages/budget.module.scss";
import commonStyles from "../styles/commonStyles.module.scss";
import { borderColor } from "@mui/system";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

export default function Budget() {
  const { handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Landpage>
      <div className={styles.container_budget}>
        <aside>
          <h1>Deixe seu projeto em boas mãos!</h1>
          <p>
            Preencha corretamente as informações do formulário para que um de
            nossos especialistas entre em contato
          </p>
        </aside>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Title title="Como podemos ajudá-lo?" icon="ri-question-line ri-2x" />
          <FormGroup className={styles.form_group_checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="Website"
            />
            <FormControlLabel
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Aplicativo"
            />

            <FormControlLabel
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="E-commerce"
            />

            <FormControlLabel
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Identidade Visual"
            />

            <FormControlLabel
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Marketing Digital"
            />

            <FormControlLabel
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />
              }
              label="Gestão de mídias sociais"
            />
          </FormGroup>

          <Title
            title="Qual seu orçamento disponível?"
            icon="ri-money-dollar-circle-line ri-2x"
          />
          <FormControl
            className={styles.form_control_radio}
            component="fieldset"
          >
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="amount_2k"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="Abaixo de 2k"
              />
              <FormControlLabel
                value="amount_5k"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="5k ~ 10k"
              />
              <FormControlLabel
                value="amount_10k"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="Acima de 10k"
              />
            </RadioGroup>
          </FormControl>

          <Title
            title="Informações do projeto?"
            icon="ri-information-line ri-2x"
          />

          <Box className={styles.info_project}>
            <TextField
              required
              id="outlined-required"
              label="Nome completo"
              variant="outlined"
            />

            <TextField
              required
              id="outlined-required"
              label="E-mail"
              variant="outlined"
            />

            <TextField
              required
              id="outlined-required"
              type="tel"
              label="Telefone"
              variant="outlined"
            />

            <TextField
              required
              id="outlined-required"
              label="Empresa"
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              label="Como nos conheceu?"
              variant="outlined"
            />

            <TextareaAutosize
              aria-label="minimum height"
              minRows={10}
              placeholder="Detalhes do projeto"
              style={{
                width: "100%",
                padding: ".8rem",
                border: "1px solid var(--gray)",
                // borderRadius: "32px",
              }}
            />
          </Box>

          <div className={commonStyles.flex}>
            <button className={commonStyles.btn_default} type="submit">
              Enviar
            </button>
            <button className={commonStyles.btn_secondary} type="reset">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Landpage>
  );
}
